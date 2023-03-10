import { Query, Resolver, Mutation, Args } from '@nestjs/graphql'

@Resolver()
export class AppReolver {
    @Query(() => String)
    hello(): string {
        return 'Hello World'
    }

    @Mutation(() => String)
    changeHello(@Args('str') str: string): string {
        return str
    }
}
