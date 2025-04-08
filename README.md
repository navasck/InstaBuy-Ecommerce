## Shadcn/ui setup
https://github.com/bradtraversy/prostore
https://ui.shadcn.com/

npx shadcn@latest init

in React 19 -      Use --legacy-peer-deps

        npx shadcn@latest add button
        npx shadcn@latest add dropdown-menu
        npx shadcn@latest add sheet
        npx shadcn@latest add card


        npm i next-themes




## Databse, Prisma & Product Display

Prisma

ORM- Object Relational Mapper
migrations: we actually create the database tables with the fields
we can map our schema with models. then we can use those models to create migrations. so that we can easily create tables, fields with specific types and all the constraints and stuffs like that.

install Prisma vscode extension

     npm i -D prisma @prisma/client
     npx prisma init - It will create schema.prisma file

     npx prisma generate - (to generate prisma client, then we can Start by importing your Prisma Client)

     npx prisma migrate dev --name init

pgAdmin : it's a free, open-source, graphical management tool designed for managing PostgreSQL databases, providing a user-friendly interface for creating, maintaining, and using database objects, as well as executing SQL queries.

     npx prisma studio ( Prisma Studio will run on http://localhost:5555/ )



https://neon.tech/



## Deploy on Vercel


