import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { AppReolver } from './app.resolver'

import { UsersModule } from './users/users.module'

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
        }),
        UsersModule,
    ],
    providers: [AppReolver],
})
export class AppModule {}
