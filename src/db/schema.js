import { relations } from 'drizzle-orm'
import { integer, jsonb, pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core'

export const usersTable = pgTable('users', {
  id: serial().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  usermane: varchar('username', { length: 255 }),
  email: varchar('email', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
})

export const snippetsTable = pgTable('snippets', {
  id: serial().primaryKey(),
  jsonName: varchar('json_name', { length: 255 }).notNull(),
  jsonData: jsonb('json_data').notNull(),
  userId: integer('user_id').references(() => usersTable.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
})

export const snippetsRelations = relations(snippetsTable, ({ one }) => ({
  user: one(usersTable, { fields: [snippetsTable.userId], references: [usersTable.id] })
}))

export const usersRelations = relations(usersTable, ({ many }) => ({
  snippet: many(snippetsTable)
}))
