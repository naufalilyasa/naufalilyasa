
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserTechnology
 * 
 */
export type UserTechnology = $Result.DefaultSelection<Prisma.$UserTechnologyPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectThumbnail
 * 
 */
export type ProjectThumbnail = $Result.DefaultSelection<Prisma.$ProjectThumbnailPayload>
/**
 * Model ProjectTechnology
 * 
 */
export type ProjectTechnology = $Result.DefaultSelection<Prisma.$ProjectTechnologyPayload>
/**
 * Model Technology
 * 
 */
export type Technology = $Result.DefaultSelection<Prisma.$TechnologyPayload>
/**
 * Model ProjectDetail
 * 
 */
export type ProjectDetail = $Result.DefaultSelection<Prisma.$ProjectDetailPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TechCategory: {
  COMMUNICATION: 'COMMUNICATION',
  VERSION_CONTROL: 'VERSION_CONTROL',
  TOOLS: 'TOOLS',
  WEB_DEV: 'WEB_DEV',
  UI_UX: 'UI_UX',
  JAVASCRIPT: 'JAVASCRIPT',
  JAVA: 'JAVA',
  C_CPP: 'C_CPP',
  C_SHARP: 'C_SHARP',
  LUA: 'LUA',
  PYTHON: 'PYTHON',
  PHP: 'PHP',
  RUBY: 'RUBY',
  ZIG: 'ZIG',
  RUST: 'RUST',
  FORTRAN: 'FORTRAN',
  GO: 'GO',
  ERLANG_ELIXIR: 'ERLANG_ELIXIR',
  APACHE: 'APACHE',
  MOBILE_DEV: 'MOBILE_DEV',
  DATABASE: 'DATABASE',
  DEVOPS: 'DEVOPS',
  CLOUD: 'CLOUD',
  AI: 'AI',
  ANALYTICS: 'ANALYTICS',
  TESTING: 'TESTING',
  GAME_DEVELOPMENT: 'GAME_DEVELOPMENT',
  OPERATING_SYSTEM: 'OPERATING_SYSTEM',
  MICROCONTROLLER: 'MICROCONTROLLER',
  MQTT_TECHNOLOGIES: 'MQTT_TECHNOLOGIES',
  BLOCKCHAIN: 'BLOCKCHAIN'
};

export type TechCategory = (typeof TechCategory)[keyof typeof TechCategory]


export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CategoryProject: {
  FULLSTACK: 'FULLSTACK',
  FRONTEND: 'FRONTEND',
  BACKEND: 'BACKEND',
  MOBILE: 'MOBILE',
  DESKTOP: 'DESKTOP',
  AIML: 'AIML',
  DEVOPS: 'DEVOPS'
};

export type CategoryProject = (typeof CategoryProject)[keyof typeof CategoryProject]

}

export type TechCategory = $Enums.TechCategory

export const TechCategory: typeof $Enums.TechCategory

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CategoryProject = $Enums.CategoryProject

export const CategoryProject: typeof $Enums.CategoryProject

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTechnology`: Exposes CRUD operations for the **UserTechnology** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTechnologies
    * const userTechnologies = await prisma.userTechnology.findMany()
    * ```
    */
  get userTechnology(): Prisma.UserTechnologyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectThumbnail`: Exposes CRUD operations for the **ProjectThumbnail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectThumbnails
    * const projectThumbnails = await prisma.projectThumbnail.findMany()
    * ```
    */
  get projectThumbnail(): Prisma.ProjectThumbnailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectTechnology`: Exposes CRUD operations for the **ProjectTechnology** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectTechnologies
    * const projectTechnologies = await prisma.projectTechnology.findMany()
    * ```
    */
  get projectTechnology(): Prisma.ProjectTechnologyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.technology`: Exposes CRUD operations for the **Technology** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Technologies
    * const technologies = await prisma.technology.findMany()
    * ```
    */
  get technology(): Prisma.TechnologyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectDetail`: Exposes CRUD operations for the **ProjectDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectDetails
    * const projectDetails = await prisma.projectDetail.findMany()
    * ```
    */
  get projectDetail(): Prisma.ProjectDetailDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserTechnology: 'UserTechnology',
    Project: 'Project',
    ProjectThumbnail: 'ProjectThumbnail',
    ProjectTechnology: 'ProjectTechnology',
    Technology: 'Technology',
    ProjectDetail: 'ProjectDetail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userTechnology" | "project" | "projectThumbnail" | "projectTechnology" | "technology" | "projectDetail"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserTechnology: {
        payload: Prisma.$UserTechnologyPayload<ExtArgs>
        fields: Prisma.UserTechnologyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTechnologyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTechnologyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTechnologyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTechnologyPayload>
          }
          findFirst: {
            args: Prisma.UserTechnologyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTechnologyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTechnologyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTechnologyPayload>
          }
          findMany: {
            args: Prisma.UserTechnologyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTechnologyPayload>[]
          }
          create: {
            args: Prisma.UserTechnologyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTechnologyPayload>
          }
          createMany: {
            args: Prisma.UserTechnologyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserTechnologyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTechnologyPayload>[]
          }
          delete: {
            args: Prisma.UserTechnologyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTechnologyPayload>
          }
          update: {
            args: Prisma.UserTechnologyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTechnologyPayload>
          }
          deleteMany: {
            args: Prisma.UserTechnologyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTechnologyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserTechnologyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTechnologyPayload>[]
          }
          upsert: {
            args: Prisma.UserTechnologyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTechnologyPayload>
          }
          aggregate: {
            args: Prisma.UserTechnologyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTechnology>
          }
          groupBy: {
            args: Prisma.UserTechnologyGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTechnologyGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTechnologyCountArgs<ExtArgs>
            result: $Utils.Optional<UserTechnologyCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectThumbnail: {
        payload: Prisma.$ProjectThumbnailPayload<ExtArgs>
        fields: Prisma.ProjectThumbnailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectThumbnailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectThumbnailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectThumbnailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectThumbnailPayload>
          }
          findFirst: {
            args: Prisma.ProjectThumbnailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectThumbnailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectThumbnailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectThumbnailPayload>
          }
          findMany: {
            args: Prisma.ProjectThumbnailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectThumbnailPayload>[]
          }
          create: {
            args: Prisma.ProjectThumbnailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectThumbnailPayload>
          }
          createMany: {
            args: Prisma.ProjectThumbnailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectThumbnailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectThumbnailPayload>[]
          }
          delete: {
            args: Prisma.ProjectThumbnailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectThumbnailPayload>
          }
          update: {
            args: Prisma.ProjectThumbnailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectThumbnailPayload>
          }
          deleteMany: {
            args: Prisma.ProjectThumbnailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectThumbnailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectThumbnailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectThumbnailPayload>[]
          }
          upsert: {
            args: Prisma.ProjectThumbnailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectThumbnailPayload>
          }
          aggregate: {
            args: Prisma.ProjectThumbnailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectThumbnail>
          }
          groupBy: {
            args: Prisma.ProjectThumbnailGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectThumbnailGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectThumbnailCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectThumbnailCountAggregateOutputType> | number
          }
        }
      }
      ProjectTechnology: {
        payload: Prisma.$ProjectTechnologyPayload<ExtArgs>
        fields: Prisma.ProjectTechnologyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectTechnologyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectTechnologyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>
          }
          findFirst: {
            args: Prisma.ProjectTechnologyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectTechnologyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>
          }
          findMany: {
            args: Prisma.ProjectTechnologyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>[]
          }
          create: {
            args: Prisma.ProjectTechnologyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>
          }
          createMany: {
            args: Prisma.ProjectTechnologyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectTechnologyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>[]
          }
          delete: {
            args: Prisma.ProjectTechnologyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>
          }
          update: {
            args: Prisma.ProjectTechnologyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>
          }
          deleteMany: {
            args: Prisma.ProjectTechnologyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectTechnologyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectTechnologyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>[]
          }
          upsert: {
            args: Prisma.ProjectTechnologyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>
          }
          aggregate: {
            args: Prisma.ProjectTechnologyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectTechnology>
          }
          groupBy: {
            args: Prisma.ProjectTechnologyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectTechnologyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectTechnologyCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectTechnologyCountAggregateOutputType> | number
          }
        }
      }
      Technology: {
        payload: Prisma.$TechnologyPayload<ExtArgs>
        fields: Prisma.TechnologyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TechnologyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TechnologyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>
          }
          findFirst: {
            args: Prisma.TechnologyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TechnologyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>
          }
          findMany: {
            args: Prisma.TechnologyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>[]
          }
          create: {
            args: Prisma.TechnologyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>
          }
          createMany: {
            args: Prisma.TechnologyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TechnologyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>[]
          }
          delete: {
            args: Prisma.TechnologyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>
          }
          update: {
            args: Prisma.TechnologyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>
          }
          deleteMany: {
            args: Prisma.TechnologyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TechnologyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TechnologyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>[]
          }
          upsert: {
            args: Prisma.TechnologyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>
          }
          aggregate: {
            args: Prisma.TechnologyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTechnology>
          }
          groupBy: {
            args: Prisma.TechnologyGroupByArgs<ExtArgs>
            result: $Utils.Optional<TechnologyGroupByOutputType>[]
          }
          count: {
            args: Prisma.TechnologyCountArgs<ExtArgs>
            result: $Utils.Optional<TechnologyCountAggregateOutputType> | number
          }
        }
      }
      ProjectDetail: {
        payload: Prisma.$ProjectDetailPayload<ExtArgs>
        fields: Prisma.ProjectDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>
          }
          findFirst: {
            args: Prisma.ProjectDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>
          }
          findMany: {
            args: Prisma.ProjectDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>[]
          }
          create: {
            args: Prisma.ProjectDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>
          }
          createMany: {
            args: Prisma.ProjectDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>[]
          }
          delete: {
            args: Prisma.ProjectDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>
          }
          update: {
            args: Prisma.ProjectDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>[]
          }
          upsert: {
            args: Prisma.ProjectDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>
          }
          aggregate: {
            args: Prisma.ProjectDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectDetail>
          }
          groupBy: {
            args: Prisma.ProjectDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectDetailCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectDetailCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userTechnology?: UserTechnologyOmit
    project?: ProjectOmit
    projectThumbnail?: ProjectThumbnailOmit
    projectTechnology?: ProjectTechnologyOmit
    technology?: TechnologyOmit
    projectDetail?: ProjectDetailOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projects: number
    userTechnologies: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    userTechnologies?: boolean | UserCountOutputTypeCountUserTechnologiesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserTechnologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTechnologyWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    projectDetail: number
    technologies: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectDetail?: boolean | ProjectCountOutputTypeCountProjectDetailArgs
    technologies?: boolean | ProjectCountOutputTypeCountTechnologiesArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDetailWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTechnologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTechnologyWhereInput
  }


  /**
   * Count Type TechnologyCountOutputType
   */

  export type TechnologyCountOutputType = {
    projects: number
    users: number
  }

  export type TechnologyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | TechnologyCountOutputTypeCountProjectsArgs
    users?: boolean | TechnologyCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * TechnologyCountOutputType without action
   */
  export type TechnologyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnologyCountOutputType
     */
    select?: TechnologyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TechnologyCountOutputType without action
   */
  export type TechnologyCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTechnologyWhereInput
  }

  /**
   * TechnologyCountOutputType without action
   */
  export type TechnologyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTechnologyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
    description: string | null
    email: string | null
    github: string | null
    linkedin: string | null
    phoneNumber: string | null
    photoId: string | null
    photoUrl: string | null
    website: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
    description: string | null
    email: string | null
    github: string | null
    linkedin: string | null
    phoneNumber: string | null
    photoId: string | null
    photoUrl: string | null
    website: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    role: number
    description: number
    email: number
    github: number
    linkedin: number
    phoneNumber: number
    photoId: number
    photoUrl: number
    website: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    description?: true
    email?: true
    github?: true
    linkedin?: true
    phoneNumber?: true
    photoId?: true
    photoUrl?: true
    website?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    description?: true
    email?: true
    github?: true
    linkedin?: true
    phoneNumber?: true
    photoId?: true
    photoUrl?: true
    website?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    description?: true
    email?: true
    github?: true
    linkedin?: true
    phoneNumber?: true
    photoId?: true
    photoUrl?: true
    website?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    role: $Enums.Role
    description: string | null
    email: string | null
    github: string | null
    linkedin: string | null
    phoneNumber: string | null
    photoId: string | null
    photoUrl: string | null
    website: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    description?: boolean
    email?: boolean
    github?: boolean
    linkedin?: boolean
    phoneNumber?: boolean
    photoId?: boolean
    photoUrl?: boolean
    website?: boolean
    projects?: boolean | User$projectsArgs<ExtArgs>
    userTechnologies?: boolean | User$userTechnologiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    description?: boolean
    email?: boolean
    github?: boolean
    linkedin?: boolean
    phoneNumber?: boolean
    photoId?: boolean
    photoUrl?: boolean
    website?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    description?: boolean
    email?: boolean
    github?: boolean
    linkedin?: boolean
    phoneNumber?: boolean
    photoId?: boolean
    photoUrl?: boolean
    website?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    description?: boolean
    email?: boolean
    github?: boolean
    linkedin?: boolean
    phoneNumber?: boolean
    photoId?: boolean
    photoUrl?: boolean
    website?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "password" | "createdAt" | "updatedAt" | "role" | "description" | "email" | "github" | "linkedin" | "phoneNumber" | "photoId" | "photoUrl" | "website", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | User$projectsArgs<ExtArgs>
    userTechnologies?: boolean | User$userTechnologiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      userTechnologies: Prisma.$UserTechnologyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      username: string
      password: string
      createdAt: Date
      updatedAt: Date
      role: $Enums.Role
      description: string | null
      email: string | null
      github: string | null
      linkedin: string | null
      phoneNumber: string | null
      photoId: string | null
      photoUrl: string | null
      website: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userTechnologies<T extends User$userTechnologiesArgs<ExtArgs> = {}>(args?: Subset<T, User$userTechnologiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTechnologyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
    readonly description: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly github: FieldRef<"User", 'String'>
    readonly linkedin: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly photoId: FieldRef<"User", 'String'>
    readonly photoUrl: FieldRef<"User", 'String'>
    readonly website: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.userTechnologies
   */
  export type User$userTechnologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnology
     */
    select?: UserTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnology
     */
    omit?: UserTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnologyInclude<ExtArgs> | null
    where?: UserTechnologyWhereInput
    orderBy?: UserTechnologyOrderByWithRelationInput | UserTechnologyOrderByWithRelationInput[]
    cursor?: UserTechnologyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTechnologyScalarFieldEnum | UserTechnologyScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserTechnology
   */

  export type AggregateUserTechnology = {
    _count: UserTechnologyCountAggregateOutputType | null
    _min: UserTechnologyMinAggregateOutputType | null
    _max: UserTechnologyMaxAggregateOutputType | null
  }

  export type UserTechnologyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    technologyId: string | null
  }

  export type UserTechnologyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    technologyId: string | null
  }

  export type UserTechnologyCountAggregateOutputType = {
    id: number
    userId: number
    technologyId: number
    _all: number
  }


  export type UserTechnologyMinAggregateInputType = {
    id?: true
    userId?: true
    technologyId?: true
  }

  export type UserTechnologyMaxAggregateInputType = {
    id?: true
    userId?: true
    technologyId?: true
  }

  export type UserTechnologyCountAggregateInputType = {
    id?: true
    userId?: true
    technologyId?: true
    _all?: true
  }

  export type UserTechnologyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTechnology to aggregate.
     */
    where?: UserTechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTechnologies to fetch.
     */
    orderBy?: UserTechnologyOrderByWithRelationInput | UserTechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTechnologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTechnologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTechnologies
    **/
    _count?: true | UserTechnologyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTechnologyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTechnologyMaxAggregateInputType
  }

  export type GetUserTechnologyAggregateType<T extends UserTechnologyAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTechnology]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTechnology[P]>
      : GetScalarType<T[P], AggregateUserTechnology[P]>
  }




  export type UserTechnologyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTechnologyWhereInput
    orderBy?: UserTechnologyOrderByWithAggregationInput | UserTechnologyOrderByWithAggregationInput[]
    by: UserTechnologyScalarFieldEnum[] | UserTechnologyScalarFieldEnum
    having?: UserTechnologyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTechnologyCountAggregateInputType | true
    _min?: UserTechnologyMinAggregateInputType
    _max?: UserTechnologyMaxAggregateInputType
  }

  export type UserTechnologyGroupByOutputType = {
    id: string
    userId: string
    technologyId: string
    _count: UserTechnologyCountAggregateOutputType | null
    _min: UserTechnologyMinAggregateOutputType | null
    _max: UserTechnologyMaxAggregateOutputType | null
  }

  type GetUserTechnologyGroupByPayload<T extends UserTechnologyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTechnologyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTechnologyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTechnologyGroupByOutputType[P]>
            : GetScalarType<T[P], UserTechnologyGroupByOutputType[P]>
        }
      >
    >


  export type UserTechnologySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    technologyId?: boolean
    technology?: boolean | TechnologyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTechnology"]>

  export type UserTechnologySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    technologyId?: boolean
    technology?: boolean | TechnologyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTechnology"]>

  export type UserTechnologySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    technologyId?: boolean
    technology?: boolean | TechnologyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTechnology"]>

  export type UserTechnologySelectScalar = {
    id?: boolean
    userId?: boolean
    technologyId?: boolean
  }

  export type UserTechnologyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "technologyId", ExtArgs["result"]["userTechnology"]>
  export type UserTechnologyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technology?: boolean | TechnologyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserTechnologyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technology?: boolean | TechnologyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserTechnologyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technology?: boolean | TechnologyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserTechnologyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTechnology"
    objects: {
      technology: Prisma.$TechnologyPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      technologyId: string
    }, ExtArgs["result"]["userTechnology"]>
    composites: {}
  }

  type UserTechnologyGetPayload<S extends boolean | null | undefined | UserTechnologyDefaultArgs> = $Result.GetResult<Prisma.$UserTechnologyPayload, S>

  type UserTechnologyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTechnologyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTechnologyCountAggregateInputType | true
    }

  export interface UserTechnologyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTechnology'], meta: { name: 'UserTechnology' } }
    /**
     * Find zero or one UserTechnology that matches the filter.
     * @param {UserTechnologyFindUniqueArgs} args - Arguments to find a UserTechnology
     * @example
     * // Get one UserTechnology
     * const userTechnology = await prisma.userTechnology.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTechnologyFindUniqueArgs>(args: SelectSubset<T, UserTechnologyFindUniqueArgs<ExtArgs>>): Prisma__UserTechnologyClient<$Result.GetResult<Prisma.$UserTechnologyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTechnology that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTechnologyFindUniqueOrThrowArgs} args - Arguments to find a UserTechnology
     * @example
     * // Get one UserTechnology
     * const userTechnology = await prisma.userTechnology.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTechnologyFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTechnologyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTechnologyClient<$Result.GetResult<Prisma.$UserTechnologyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTechnology that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTechnologyFindFirstArgs} args - Arguments to find a UserTechnology
     * @example
     * // Get one UserTechnology
     * const userTechnology = await prisma.userTechnology.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTechnologyFindFirstArgs>(args?: SelectSubset<T, UserTechnologyFindFirstArgs<ExtArgs>>): Prisma__UserTechnologyClient<$Result.GetResult<Prisma.$UserTechnologyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTechnology that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTechnologyFindFirstOrThrowArgs} args - Arguments to find a UserTechnology
     * @example
     * // Get one UserTechnology
     * const userTechnology = await prisma.userTechnology.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTechnologyFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTechnologyFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTechnologyClient<$Result.GetResult<Prisma.$UserTechnologyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTechnologies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTechnologyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTechnologies
     * const userTechnologies = await prisma.userTechnology.findMany()
     * 
     * // Get first 10 UserTechnologies
     * const userTechnologies = await prisma.userTechnology.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTechnologyWithIdOnly = await prisma.userTechnology.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTechnologyFindManyArgs>(args?: SelectSubset<T, UserTechnologyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTechnologyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTechnology.
     * @param {UserTechnologyCreateArgs} args - Arguments to create a UserTechnology.
     * @example
     * // Create one UserTechnology
     * const UserTechnology = await prisma.userTechnology.create({
     *   data: {
     *     // ... data to create a UserTechnology
     *   }
     * })
     * 
     */
    create<T extends UserTechnologyCreateArgs>(args: SelectSubset<T, UserTechnologyCreateArgs<ExtArgs>>): Prisma__UserTechnologyClient<$Result.GetResult<Prisma.$UserTechnologyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTechnologies.
     * @param {UserTechnologyCreateManyArgs} args - Arguments to create many UserTechnologies.
     * @example
     * // Create many UserTechnologies
     * const userTechnology = await prisma.userTechnology.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTechnologyCreateManyArgs>(args?: SelectSubset<T, UserTechnologyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTechnologies and returns the data saved in the database.
     * @param {UserTechnologyCreateManyAndReturnArgs} args - Arguments to create many UserTechnologies.
     * @example
     * // Create many UserTechnologies
     * const userTechnology = await prisma.userTechnology.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTechnologies and only return the `id`
     * const userTechnologyWithIdOnly = await prisma.userTechnology.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserTechnologyCreateManyAndReturnArgs>(args?: SelectSubset<T, UserTechnologyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTechnologyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserTechnology.
     * @param {UserTechnologyDeleteArgs} args - Arguments to delete one UserTechnology.
     * @example
     * // Delete one UserTechnology
     * const UserTechnology = await prisma.userTechnology.delete({
     *   where: {
     *     // ... filter to delete one UserTechnology
     *   }
     * })
     * 
     */
    delete<T extends UserTechnologyDeleteArgs>(args: SelectSubset<T, UserTechnologyDeleteArgs<ExtArgs>>): Prisma__UserTechnologyClient<$Result.GetResult<Prisma.$UserTechnologyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTechnology.
     * @param {UserTechnologyUpdateArgs} args - Arguments to update one UserTechnology.
     * @example
     * // Update one UserTechnology
     * const userTechnology = await prisma.userTechnology.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTechnologyUpdateArgs>(args: SelectSubset<T, UserTechnologyUpdateArgs<ExtArgs>>): Prisma__UserTechnologyClient<$Result.GetResult<Prisma.$UserTechnologyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTechnologies.
     * @param {UserTechnologyDeleteManyArgs} args - Arguments to filter UserTechnologies to delete.
     * @example
     * // Delete a few UserTechnologies
     * const { count } = await prisma.userTechnology.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTechnologyDeleteManyArgs>(args?: SelectSubset<T, UserTechnologyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTechnologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTechnologyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTechnologies
     * const userTechnology = await prisma.userTechnology.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTechnologyUpdateManyArgs>(args: SelectSubset<T, UserTechnologyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTechnologies and returns the data updated in the database.
     * @param {UserTechnologyUpdateManyAndReturnArgs} args - Arguments to update many UserTechnologies.
     * @example
     * // Update many UserTechnologies
     * const userTechnology = await prisma.userTechnology.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTechnologies and only return the `id`
     * const userTechnologyWithIdOnly = await prisma.userTechnology.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserTechnologyUpdateManyAndReturnArgs>(args: SelectSubset<T, UserTechnologyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTechnologyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserTechnology.
     * @param {UserTechnologyUpsertArgs} args - Arguments to update or create a UserTechnology.
     * @example
     * // Update or create a UserTechnology
     * const userTechnology = await prisma.userTechnology.upsert({
     *   create: {
     *     // ... data to create a UserTechnology
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTechnology we want to update
     *   }
     * })
     */
    upsert<T extends UserTechnologyUpsertArgs>(args: SelectSubset<T, UserTechnologyUpsertArgs<ExtArgs>>): Prisma__UserTechnologyClient<$Result.GetResult<Prisma.$UserTechnologyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTechnologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTechnologyCountArgs} args - Arguments to filter UserTechnologies to count.
     * @example
     * // Count the number of UserTechnologies
     * const count = await prisma.userTechnology.count({
     *   where: {
     *     // ... the filter for the UserTechnologies we want to count
     *   }
     * })
    **/
    count<T extends UserTechnologyCountArgs>(
      args?: Subset<T, UserTechnologyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTechnologyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTechnology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTechnologyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserTechnologyAggregateArgs>(args: Subset<T, UserTechnologyAggregateArgs>): Prisma.PrismaPromise<GetUserTechnologyAggregateType<T>>

    /**
     * Group by UserTechnology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTechnologyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserTechnologyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTechnologyGroupByArgs['orderBy'] }
        : { orderBy?: UserTechnologyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserTechnologyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTechnologyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTechnology model
   */
  readonly fields: UserTechnologyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTechnology.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTechnologyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    technology<T extends TechnologyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TechnologyDefaultArgs<ExtArgs>>): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserTechnology model
   */
  interface UserTechnologyFieldRefs {
    readonly id: FieldRef<"UserTechnology", 'String'>
    readonly userId: FieldRef<"UserTechnology", 'String'>
    readonly technologyId: FieldRef<"UserTechnology", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserTechnology findUnique
   */
  export type UserTechnologyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnology
     */
    select?: UserTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnology
     */
    omit?: UserTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnologyInclude<ExtArgs> | null
    /**
     * Filter, which UserTechnology to fetch.
     */
    where: UserTechnologyWhereUniqueInput
  }

  /**
   * UserTechnology findUniqueOrThrow
   */
  export type UserTechnologyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnology
     */
    select?: UserTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnology
     */
    omit?: UserTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnologyInclude<ExtArgs> | null
    /**
     * Filter, which UserTechnology to fetch.
     */
    where: UserTechnologyWhereUniqueInput
  }

  /**
   * UserTechnology findFirst
   */
  export type UserTechnologyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnology
     */
    select?: UserTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnology
     */
    omit?: UserTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnologyInclude<ExtArgs> | null
    /**
     * Filter, which UserTechnology to fetch.
     */
    where?: UserTechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTechnologies to fetch.
     */
    orderBy?: UserTechnologyOrderByWithRelationInput | UserTechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTechnologies.
     */
    cursor?: UserTechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTechnologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTechnologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTechnologies.
     */
    distinct?: UserTechnologyScalarFieldEnum | UserTechnologyScalarFieldEnum[]
  }

  /**
   * UserTechnology findFirstOrThrow
   */
  export type UserTechnologyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnology
     */
    select?: UserTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnology
     */
    omit?: UserTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnologyInclude<ExtArgs> | null
    /**
     * Filter, which UserTechnology to fetch.
     */
    where?: UserTechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTechnologies to fetch.
     */
    orderBy?: UserTechnologyOrderByWithRelationInput | UserTechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTechnologies.
     */
    cursor?: UserTechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTechnologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTechnologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTechnologies.
     */
    distinct?: UserTechnologyScalarFieldEnum | UserTechnologyScalarFieldEnum[]
  }

  /**
   * UserTechnology findMany
   */
  export type UserTechnologyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnology
     */
    select?: UserTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnology
     */
    omit?: UserTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnologyInclude<ExtArgs> | null
    /**
     * Filter, which UserTechnologies to fetch.
     */
    where?: UserTechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTechnologies to fetch.
     */
    orderBy?: UserTechnologyOrderByWithRelationInput | UserTechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTechnologies.
     */
    cursor?: UserTechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTechnologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTechnologies.
     */
    skip?: number
    distinct?: UserTechnologyScalarFieldEnum | UserTechnologyScalarFieldEnum[]
  }

  /**
   * UserTechnology create
   */
  export type UserTechnologyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnology
     */
    select?: UserTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnology
     */
    omit?: UserTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnologyInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTechnology.
     */
    data: XOR<UserTechnologyCreateInput, UserTechnologyUncheckedCreateInput>
  }

  /**
   * UserTechnology createMany
   */
  export type UserTechnologyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTechnologies.
     */
    data: UserTechnologyCreateManyInput | UserTechnologyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTechnology createManyAndReturn
   */
  export type UserTechnologyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnology
     */
    select?: UserTechnologySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnology
     */
    omit?: UserTechnologyOmit<ExtArgs> | null
    /**
     * The data used to create many UserTechnologies.
     */
    data: UserTechnologyCreateManyInput | UserTechnologyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnologyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTechnology update
   */
  export type UserTechnologyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnology
     */
    select?: UserTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnology
     */
    omit?: UserTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnologyInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTechnology.
     */
    data: XOR<UserTechnologyUpdateInput, UserTechnologyUncheckedUpdateInput>
    /**
     * Choose, which UserTechnology to update.
     */
    where: UserTechnologyWhereUniqueInput
  }

  /**
   * UserTechnology updateMany
   */
  export type UserTechnologyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTechnologies.
     */
    data: XOR<UserTechnologyUpdateManyMutationInput, UserTechnologyUncheckedUpdateManyInput>
    /**
     * Filter which UserTechnologies to update
     */
    where?: UserTechnologyWhereInput
    /**
     * Limit how many UserTechnologies to update.
     */
    limit?: number
  }

  /**
   * UserTechnology updateManyAndReturn
   */
  export type UserTechnologyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnology
     */
    select?: UserTechnologySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnology
     */
    omit?: UserTechnologyOmit<ExtArgs> | null
    /**
     * The data used to update UserTechnologies.
     */
    data: XOR<UserTechnologyUpdateManyMutationInput, UserTechnologyUncheckedUpdateManyInput>
    /**
     * Filter which UserTechnologies to update
     */
    where?: UserTechnologyWhereInput
    /**
     * Limit how many UserTechnologies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnologyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTechnology upsert
   */
  export type UserTechnologyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnology
     */
    select?: UserTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnology
     */
    omit?: UserTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnologyInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTechnology to update in case it exists.
     */
    where: UserTechnologyWhereUniqueInput
    /**
     * In case the UserTechnology found by the `where` argument doesn't exist, create a new UserTechnology with this data.
     */
    create: XOR<UserTechnologyCreateInput, UserTechnologyUncheckedCreateInput>
    /**
     * In case the UserTechnology was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTechnologyUpdateInput, UserTechnologyUncheckedUpdateInput>
  }

  /**
   * UserTechnology delete
   */
  export type UserTechnologyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnology
     */
    select?: UserTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnology
     */
    omit?: UserTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnologyInclude<ExtArgs> | null
    /**
     * Filter which UserTechnology to delete.
     */
    where: UserTechnologyWhereUniqueInput
  }

  /**
   * UserTechnology deleteMany
   */
  export type UserTechnologyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTechnologies to delete
     */
    where?: UserTechnologyWhereInput
    /**
     * Limit how many UserTechnologies to delete.
     */
    limit?: number
  }

  /**
   * UserTechnology without action
   */
  export type UserTechnologyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnology
     */
    select?: UserTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnology
     */
    omit?: UserTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnologyInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    userId: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    category: $Enums.CategoryProject | null
    featured: boolean | null
    githubUrl: string | null
    liveUrl: string | null
    title: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    category: $Enums.CategoryProject | null
    featured: boolean | null
    githubUrl: string | null
    liveUrl: string | null
    title: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    userId: number
    description: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    category: number
    featured: number
    githubUrl: number
    liveUrl: number
    title: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    userId?: true
    description?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    category?: true
    featured?: true
    githubUrl?: true
    liveUrl?: true
    title?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    userId?: true
    description?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    category?: true
    featured?: true
    githubUrl?: true
    liveUrl?: true
    title?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    userId?: true
    description?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    category?: true
    featured?: true
    githubUrl?: true
    liveUrl?: true
    title?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    userId: string
    description: string
    startDate: Date
    endDate: Date | null
    createdAt: Date
    updatedAt: Date
    category: $Enums.CategoryProject
    featured: boolean
    githubUrl: string | null
    liveUrl: string | null
    title: string
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean
    featured?: boolean
    githubUrl?: boolean
    liveUrl?: boolean
    title?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    projectDetail?: boolean | Project$projectDetailArgs<ExtArgs>
    technologies?: boolean | Project$technologiesArgs<ExtArgs>
    thumbnail?: boolean | Project$thumbnailArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean
    featured?: boolean
    githubUrl?: boolean
    liveUrl?: boolean
    title?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean
    featured?: boolean
    githubUrl?: boolean
    liveUrl?: boolean
    title?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    userId?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean
    featured?: boolean
    githubUrl?: boolean
    liveUrl?: boolean
    title?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "description" | "startDate" | "endDate" | "createdAt" | "updatedAt" | "category" | "featured" | "githubUrl" | "liveUrl" | "title", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    projectDetail?: boolean | Project$projectDetailArgs<ExtArgs>
    technologies?: boolean | Project$technologiesArgs<ExtArgs>
    thumbnail?: boolean | Project$thumbnailArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      projectDetail: Prisma.$ProjectDetailPayload<ExtArgs>[]
      technologies: Prisma.$ProjectTechnologyPayload<ExtArgs>[]
      thumbnail: Prisma.$ProjectThumbnailPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      description: string
      startDate: Date
      endDate: Date | null
      createdAt: Date
      updatedAt: Date
      category: $Enums.CategoryProject
      featured: boolean
      githubUrl: string | null
      liveUrl: string | null
      title: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projectDetail<T extends Project$projectDetailArgs<ExtArgs> = {}>(args?: Subset<T, Project$projectDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    technologies<T extends Project$technologiesArgs<ExtArgs> = {}>(args?: Subset<T, Project$technologiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    thumbnail<T extends Project$thumbnailArgs<ExtArgs> = {}>(args?: Subset<T, Project$thumbnailArgs<ExtArgs>>): Prisma__ProjectThumbnailClient<$Result.GetResult<Prisma.$ProjectThumbnailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly userId: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly startDate: FieldRef<"Project", 'DateTime'>
    readonly endDate: FieldRef<"Project", 'DateTime'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly category: FieldRef<"Project", 'CategoryProject'>
    readonly featured: FieldRef<"Project", 'Boolean'>
    readonly githubUrl: FieldRef<"Project", 'String'>
    readonly liveUrl: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.projectDetail
   */
  export type Project$projectDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
    where?: ProjectDetailWhereInput
    orderBy?: ProjectDetailOrderByWithRelationInput | ProjectDetailOrderByWithRelationInput[]
    cursor?: ProjectDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectDetailScalarFieldEnum | ProjectDetailScalarFieldEnum[]
  }

  /**
   * Project.technologies
   */
  export type Project$technologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    where?: ProjectTechnologyWhereInput
    orderBy?: ProjectTechnologyOrderByWithRelationInput | ProjectTechnologyOrderByWithRelationInput[]
    cursor?: ProjectTechnologyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectTechnologyScalarFieldEnum | ProjectTechnologyScalarFieldEnum[]
  }

  /**
   * Project.thumbnail
   */
  export type Project$thumbnailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectThumbnail
     */
    select?: ProjectThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectThumbnail
     */
    omit?: ProjectThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectThumbnailInclude<ExtArgs> | null
    where?: ProjectThumbnailWhereInput
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectThumbnail
   */

  export type AggregateProjectThumbnail = {
    _count: ProjectThumbnailCountAggregateOutputType | null
    _min: ProjectThumbnailMinAggregateOutputType | null
    _max: ProjectThumbnailMaxAggregateOutputType | null
  }

  export type ProjectThumbnailMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    url: string | null
    publicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectThumbnailMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    url: string | null
    publicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectThumbnailCountAggregateOutputType = {
    id: number
    projectId: number
    url: number
    publicId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectThumbnailMinAggregateInputType = {
    id?: true
    projectId?: true
    url?: true
    publicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectThumbnailMaxAggregateInputType = {
    id?: true
    projectId?: true
    url?: true
    publicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectThumbnailCountAggregateInputType = {
    id?: true
    projectId?: true
    url?: true
    publicId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectThumbnailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectThumbnail to aggregate.
     */
    where?: ProjectThumbnailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectThumbnails to fetch.
     */
    orderBy?: ProjectThumbnailOrderByWithRelationInput | ProjectThumbnailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectThumbnailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectThumbnails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectThumbnails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectThumbnails
    **/
    _count?: true | ProjectThumbnailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectThumbnailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectThumbnailMaxAggregateInputType
  }

  export type GetProjectThumbnailAggregateType<T extends ProjectThumbnailAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectThumbnail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectThumbnail[P]>
      : GetScalarType<T[P], AggregateProjectThumbnail[P]>
  }




  export type ProjectThumbnailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectThumbnailWhereInput
    orderBy?: ProjectThumbnailOrderByWithAggregationInput | ProjectThumbnailOrderByWithAggregationInput[]
    by: ProjectThumbnailScalarFieldEnum[] | ProjectThumbnailScalarFieldEnum
    having?: ProjectThumbnailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectThumbnailCountAggregateInputType | true
    _min?: ProjectThumbnailMinAggregateInputType
    _max?: ProjectThumbnailMaxAggregateInputType
  }

  export type ProjectThumbnailGroupByOutputType = {
    id: string
    projectId: string
    url: string
    publicId: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectThumbnailCountAggregateOutputType | null
    _min: ProjectThumbnailMinAggregateOutputType | null
    _max: ProjectThumbnailMaxAggregateOutputType | null
  }

  type GetProjectThumbnailGroupByPayload<T extends ProjectThumbnailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectThumbnailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectThumbnailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectThumbnailGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectThumbnailGroupByOutputType[P]>
        }
      >
    >


  export type ProjectThumbnailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    url?: boolean
    publicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectThumbnail"]>

  export type ProjectThumbnailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    url?: boolean
    publicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectThumbnail"]>

  export type ProjectThumbnailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    url?: boolean
    publicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectThumbnail"]>

  export type ProjectThumbnailSelectScalar = {
    id?: boolean
    projectId?: boolean
    url?: boolean
    publicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectThumbnailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "url" | "publicId" | "createdAt" | "updatedAt", ExtArgs["result"]["projectThumbnail"]>
  export type ProjectThumbnailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectThumbnailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectThumbnailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectThumbnailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectThumbnail"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      url: string
      publicId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectThumbnail"]>
    composites: {}
  }

  type ProjectThumbnailGetPayload<S extends boolean | null | undefined | ProjectThumbnailDefaultArgs> = $Result.GetResult<Prisma.$ProjectThumbnailPayload, S>

  type ProjectThumbnailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectThumbnailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectThumbnailCountAggregateInputType | true
    }

  export interface ProjectThumbnailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectThumbnail'], meta: { name: 'ProjectThumbnail' } }
    /**
     * Find zero or one ProjectThumbnail that matches the filter.
     * @param {ProjectThumbnailFindUniqueArgs} args - Arguments to find a ProjectThumbnail
     * @example
     * // Get one ProjectThumbnail
     * const projectThumbnail = await prisma.projectThumbnail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectThumbnailFindUniqueArgs>(args: SelectSubset<T, ProjectThumbnailFindUniqueArgs<ExtArgs>>): Prisma__ProjectThumbnailClient<$Result.GetResult<Prisma.$ProjectThumbnailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectThumbnail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectThumbnailFindUniqueOrThrowArgs} args - Arguments to find a ProjectThumbnail
     * @example
     * // Get one ProjectThumbnail
     * const projectThumbnail = await prisma.projectThumbnail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectThumbnailFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectThumbnailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectThumbnailClient<$Result.GetResult<Prisma.$ProjectThumbnailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectThumbnail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectThumbnailFindFirstArgs} args - Arguments to find a ProjectThumbnail
     * @example
     * // Get one ProjectThumbnail
     * const projectThumbnail = await prisma.projectThumbnail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectThumbnailFindFirstArgs>(args?: SelectSubset<T, ProjectThumbnailFindFirstArgs<ExtArgs>>): Prisma__ProjectThumbnailClient<$Result.GetResult<Prisma.$ProjectThumbnailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectThumbnail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectThumbnailFindFirstOrThrowArgs} args - Arguments to find a ProjectThumbnail
     * @example
     * // Get one ProjectThumbnail
     * const projectThumbnail = await prisma.projectThumbnail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectThumbnailFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectThumbnailFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectThumbnailClient<$Result.GetResult<Prisma.$ProjectThumbnailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectThumbnails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectThumbnailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectThumbnails
     * const projectThumbnails = await prisma.projectThumbnail.findMany()
     * 
     * // Get first 10 ProjectThumbnails
     * const projectThumbnails = await prisma.projectThumbnail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectThumbnailWithIdOnly = await prisma.projectThumbnail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectThumbnailFindManyArgs>(args?: SelectSubset<T, ProjectThumbnailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectThumbnailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectThumbnail.
     * @param {ProjectThumbnailCreateArgs} args - Arguments to create a ProjectThumbnail.
     * @example
     * // Create one ProjectThumbnail
     * const ProjectThumbnail = await prisma.projectThumbnail.create({
     *   data: {
     *     // ... data to create a ProjectThumbnail
     *   }
     * })
     * 
     */
    create<T extends ProjectThumbnailCreateArgs>(args: SelectSubset<T, ProjectThumbnailCreateArgs<ExtArgs>>): Prisma__ProjectThumbnailClient<$Result.GetResult<Prisma.$ProjectThumbnailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectThumbnails.
     * @param {ProjectThumbnailCreateManyArgs} args - Arguments to create many ProjectThumbnails.
     * @example
     * // Create many ProjectThumbnails
     * const projectThumbnail = await prisma.projectThumbnail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectThumbnailCreateManyArgs>(args?: SelectSubset<T, ProjectThumbnailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectThumbnails and returns the data saved in the database.
     * @param {ProjectThumbnailCreateManyAndReturnArgs} args - Arguments to create many ProjectThumbnails.
     * @example
     * // Create many ProjectThumbnails
     * const projectThumbnail = await prisma.projectThumbnail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectThumbnails and only return the `id`
     * const projectThumbnailWithIdOnly = await prisma.projectThumbnail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectThumbnailCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectThumbnailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectThumbnailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectThumbnail.
     * @param {ProjectThumbnailDeleteArgs} args - Arguments to delete one ProjectThumbnail.
     * @example
     * // Delete one ProjectThumbnail
     * const ProjectThumbnail = await prisma.projectThumbnail.delete({
     *   where: {
     *     // ... filter to delete one ProjectThumbnail
     *   }
     * })
     * 
     */
    delete<T extends ProjectThumbnailDeleteArgs>(args: SelectSubset<T, ProjectThumbnailDeleteArgs<ExtArgs>>): Prisma__ProjectThumbnailClient<$Result.GetResult<Prisma.$ProjectThumbnailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectThumbnail.
     * @param {ProjectThumbnailUpdateArgs} args - Arguments to update one ProjectThumbnail.
     * @example
     * // Update one ProjectThumbnail
     * const projectThumbnail = await prisma.projectThumbnail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectThumbnailUpdateArgs>(args: SelectSubset<T, ProjectThumbnailUpdateArgs<ExtArgs>>): Prisma__ProjectThumbnailClient<$Result.GetResult<Prisma.$ProjectThumbnailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectThumbnails.
     * @param {ProjectThumbnailDeleteManyArgs} args - Arguments to filter ProjectThumbnails to delete.
     * @example
     * // Delete a few ProjectThumbnails
     * const { count } = await prisma.projectThumbnail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectThumbnailDeleteManyArgs>(args?: SelectSubset<T, ProjectThumbnailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectThumbnails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectThumbnailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectThumbnails
     * const projectThumbnail = await prisma.projectThumbnail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectThumbnailUpdateManyArgs>(args: SelectSubset<T, ProjectThumbnailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectThumbnails and returns the data updated in the database.
     * @param {ProjectThumbnailUpdateManyAndReturnArgs} args - Arguments to update many ProjectThumbnails.
     * @example
     * // Update many ProjectThumbnails
     * const projectThumbnail = await prisma.projectThumbnail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectThumbnails and only return the `id`
     * const projectThumbnailWithIdOnly = await prisma.projectThumbnail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectThumbnailUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectThumbnailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectThumbnailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectThumbnail.
     * @param {ProjectThumbnailUpsertArgs} args - Arguments to update or create a ProjectThumbnail.
     * @example
     * // Update or create a ProjectThumbnail
     * const projectThumbnail = await prisma.projectThumbnail.upsert({
     *   create: {
     *     // ... data to create a ProjectThumbnail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectThumbnail we want to update
     *   }
     * })
     */
    upsert<T extends ProjectThumbnailUpsertArgs>(args: SelectSubset<T, ProjectThumbnailUpsertArgs<ExtArgs>>): Prisma__ProjectThumbnailClient<$Result.GetResult<Prisma.$ProjectThumbnailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectThumbnails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectThumbnailCountArgs} args - Arguments to filter ProjectThumbnails to count.
     * @example
     * // Count the number of ProjectThumbnails
     * const count = await prisma.projectThumbnail.count({
     *   where: {
     *     // ... the filter for the ProjectThumbnails we want to count
     *   }
     * })
    **/
    count<T extends ProjectThumbnailCountArgs>(
      args?: Subset<T, ProjectThumbnailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectThumbnailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectThumbnail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectThumbnailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectThumbnailAggregateArgs>(args: Subset<T, ProjectThumbnailAggregateArgs>): Prisma.PrismaPromise<GetProjectThumbnailAggregateType<T>>

    /**
     * Group by ProjectThumbnail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectThumbnailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectThumbnailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectThumbnailGroupByArgs['orderBy'] }
        : { orderBy?: ProjectThumbnailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectThumbnailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectThumbnailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectThumbnail model
   */
  readonly fields: ProjectThumbnailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectThumbnail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectThumbnailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectThumbnail model
   */
  interface ProjectThumbnailFieldRefs {
    readonly id: FieldRef<"ProjectThumbnail", 'String'>
    readonly projectId: FieldRef<"ProjectThumbnail", 'String'>
    readonly url: FieldRef<"ProjectThumbnail", 'String'>
    readonly publicId: FieldRef<"ProjectThumbnail", 'String'>
    readonly createdAt: FieldRef<"ProjectThumbnail", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectThumbnail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectThumbnail findUnique
   */
  export type ProjectThumbnailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectThumbnail
     */
    select?: ProjectThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectThumbnail
     */
    omit?: ProjectThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectThumbnailInclude<ExtArgs> | null
    /**
     * Filter, which ProjectThumbnail to fetch.
     */
    where: ProjectThumbnailWhereUniqueInput
  }

  /**
   * ProjectThumbnail findUniqueOrThrow
   */
  export type ProjectThumbnailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectThumbnail
     */
    select?: ProjectThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectThumbnail
     */
    omit?: ProjectThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectThumbnailInclude<ExtArgs> | null
    /**
     * Filter, which ProjectThumbnail to fetch.
     */
    where: ProjectThumbnailWhereUniqueInput
  }

  /**
   * ProjectThumbnail findFirst
   */
  export type ProjectThumbnailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectThumbnail
     */
    select?: ProjectThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectThumbnail
     */
    omit?: ProjectThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectThumbnailInclude<ExtArgs> | null
    /**
     * Filter, which ProjectThumbnail to fetch.
     */
    where?: ProjectThumbnailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectThumbnails to fetch.
     */
    orderBy?: ProjectThumbnailOrderByWithRelationInput | ProjectThumbnailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectThumbnails.
     */
    cursor?: ProjectThumbnailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectThumbnails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectThumbnails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectThumbnails.
     */
    distinct?: ProjectThumbnailScalarFieldEnum | ProjectThumbnailScalarFieldEnum[]
  }

  /**
   * ProjectThumbnail findFirstOrThrow
   */
  export type ProjectThumbnailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectThumbnail
     */
    select?: ProjectThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectThumbnail
     */
    omit?: ProjectThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectThumbnailInclude<ExtArgs> | null
    /**
     * Filter, which ProjectThumbnail to fetch.
     */
    where?: ProjectThumbnailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectThumbnails to fetch.
     */
    orderBy?: ProjectThumbnailOrderByWithRelationInput | ProjectThumbnailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectThumbnails.
     */
    cursor?: ProjectThumbnailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectThumbnails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectThumbnails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectThumbnails.
     */
    distinct?: ProjectThumbnailScalarFieldEnum | ProjectThumbnailScalarFieldEnum[]
  }

  /**
   * ProjectThumbnail findMany
   */
  export type ProjectThumbnailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectThumbnail
     */
    select?: ProjectThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectThumbnail
     */
    omit?: ProjectThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectThumbnailInclude<ExtArgs> | null
    /**
     * Filter, which ProjectThumbnails to fetch.
     */
    where?: ProjectThumbnailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectThumbnails to fetch.
     */
    orderBy?: ProjectThumbnailOrderByWithRelationInput | ProjectThumbnailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectThumbnails.
     */
    cursor?: ProjectThumbnailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectThumbnails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectThumbnails.
     */
    skip?: number
    distinct?: ProjectThumbnailScalarFieldEnum | ProjectThumbnailScalarFieldEnum[]
  }

  /**
   * ProjectThumbnail create
   */
  export type ProjectThumbnailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectThumbnail
     */
    select?: ProjectThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectThumbnail
     */
    omit?: ProjectThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectThumbnailInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectThumbnail.
     */
    data: XOR<ProjectThumbnailCreateInput, ProjectThumbnailUncheckedCreateInput>
  }

  /**
   * ProjectThumbnail createMany
   */
  export type ProjectThumbnailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectThumbnails.
     */
    data: ProjectThumbnailCreateManyInput | ProjectThumbnailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectThumbnail createManyAndReturn
   */
  export type ProjectThumbnailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectThumbnail
     */
    select?: ProjectThumbnailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectThumbnail
     */
    omit?: ProjectThumbnailOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectThumbnails.
     */
    data: ProjectThumbnailCreateManyInput | ProjectThumbnailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectThumbnailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectThumbnail update
   */
  export type ProjectThumbnailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectThumbnail
     */
    select?: ProjectThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectThumbnail
     */
    omit?: ProjectThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectThumbnailInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectThumbnail.
     */
    data: XOR<ProjectThumbnailUpdateInput, ProjectThumbnailUncheckedUpdateInput>
    /**
     * Choose, which ProjectThumbnail to update.
     */
    where: ProjectThumbnailWhereUniqueInput
  }

  /**
   * ProjectThumbnail updateMany
   */
  export type ProjectThumbnailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectThumbnails.
     */
    data: XOR<ProjectThumbnailUpdateManyMutationInput, ProjectThumbnailUncheckedUpdateManyInput>
    /**
     * Filter which ProjectThumbnails to update
     */
    where?: ProjectThumbnailWhereInput
    /**
     * Limit how many ProjectThumbnails to update.
     */
    limit?: number
  }

  /**
   * ProjectThumbnail updateManyAndReturn
   */
  export type ProjectThumbnailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectThumbnail
     */
    select?: ProjectThumbnailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectThumbnail
     */
    omit?: ProjectThumbnailOmit<ExtArgs> | null
    /**
     * The data used to update ProjectThumbnails.
     */
    data: XOR<ProjectThumbnailUpdateManyMutationInput, ProjectThumbnailUncheckedUpdateManyInput>
    /**
     * Filter which ProjectThumbnails to update
     */
    where?: ProjectThumbnailWhereInput
    /**
     * Limit how many ProjectThumbnails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectThumbnailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectThumbnail upsert
   */
  export type ProjectThumbnailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectThumbnail
     */
    select?: ProjectThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectThumbnail
     */
    omit?: ProjectThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectThumbnailInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectThumbnail to update in case it exists.
     */
    where: ProjectThumbnailWhereUniqueInput
    /**
     * In case the ProjectThumbnail found by the `where` argument doesn't exist, create a new ProjectThumbnail with this data.
     */
    create: XOR<ProjectThumbnailCreateInput, ProjectThumbnailUncheckedCreateInput>
    /**
     * In case the ProjectThumbnail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectThumbnailUpdateInput, ProjectThumbnailUncheckedUpdateInput>
  }

  /**
   * ProjectThumbnail delete
   */
  export type ProjectThumbnailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectThumbnail
     */
    select?: ProjectThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectThumbnail
     */
    omit?: ProjectThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectThumbnailInclude<ExtArgs> | null
    /**
     * Filter which ProjectThumbnail to delete.
     */
    where: ProjectThumbnailWhereUniqueInput
  }

  /**
   * ProjectThumbnail deleteMany
   */
  export type ProjectThumbnailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectThumbnails to delete
     */
    where?: ProjectThumbnailWhereInput
    /**
     * Limit how many ProjectThumbnails to delete.
     */
    limit?: number
  }

  /**
   * ProjectThumbnail without action
   */
  export type ProjectThumbnailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectThumbnail
     */
    select?: ProjectThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectThumbnail
     */
    omit?: ProjectThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectThumbnailInclude<ExtArgs> | null
  }


  /**
   * Model ProjectTechnology
   */

  export type AggregateProjectTechnology = {
    _count: ProjectTechnologyCountAggregateOutputType | null
    _min: ProjectTechnologyMinAggregateOutputType | null
    _max: ProjectTechnologyMaxAggregateOutputType | null
  }

  export type ProjectTechnologyMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    technologyId: string | null
  }

  export type ProjectTechnologyMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    technologyId: string | null
  }

  export type ProjectTechnologyCountAggregateOutputType = {
    id: number
    projectId: number
    technologyId: number
    _all: number
  }


  export type ProjectTechnologyMinAggregateInputType = {
    id?: true
    projectId?: true
    technologyId?: true
  }

  export type ProjectTechnologyMaxAggregateInputType = {
    id?: true
    projectId?: true
    technologyId?: true
  }

  export type ProjectTechnologyCountAggregateInputType = {
    id?: true
    projectId?: true
    technologyId?: true
    _all?: true
  }

  export type ProjectTechnologyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTechnology to aggregate.
     */
    where?: ProjectTechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTechnologies to fetch.
     */
    orderBy?: ProjectTechnologyOrderByWithRelationInput | ProjectTechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectTechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTechnologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTechnologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectTechnologies
    **/
    _count?: true | ProjectTechnologyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectTechnologyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectTechnologyMaxAggregateInputType
  }

  export type GetProjectTechnologyAggregateType<T extends ProjectTechnologyAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectTechnology]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectTechnology[P]>
      : GetScalarType<T[P], AggregateProjectTechnology[P]>
  }




  export type ProjectTechnologyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTechnologyWhereInput
    orderBy?: ProjectTechnologyOrderByWithAggregationInput | ProjectTechnologyOrderByWithAggregationInput[]
    by: ProjectTechnologyScalarFieldEnum[] | ProjectTechnologyScalarFieldEnum
    having?: ProjectTechnologyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectTechnologyCountAggregateInputType | true
    _min?: ProjectTechnologyMinAggregateInputType
    _max?: ProjectTechnologyMaxAggregateInputType
  }

  export type ProjectTechnologyGroupByOutputType = {
    id: string
    projectId: string
    technologyId: string
    _count: ProjectTechnologyCountAggregateOutputType | null
    _min: ProjectTechnologyMinAggregateOutputType | null
    _max: ProjectTechnologyMaxAggregateOutputType | null
  }

  type GetProjectTechnologyGroupByPayload<T extends ProjectTechnologyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectTechnologyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectTechnologyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectTechnologyGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectTechnologyGroupByOutputType[P]>
        }
      >
    >


  export type ProjectTechnologySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    technologyId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    technology?: boolean | TechnologyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTechnology"]>

  export type ProjectTechnologySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    technologyId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    technology?: boolean | TechnologyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTechnology"]>

  export type ProjectTechnologySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    technologyId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    technology?: boolean | TechnologyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTechnology"]>

  export type ProjectTechnologySelectScalar = {
    id?: boolean
    projectId?: boolean
    technologyId?: boolean
  }

  export type ProjectTechnologyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "technologyId", ExtArgs["result"]["projectTechnology"]>
  export type ProjectTechnologyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    technology?: boolean | TechnologyDefaultArgs<ExtArgs>
  }
  export type ProjectTechnologyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    technology?: boolean | TechnologyDefaultArgs<ExtArgs>
  }
  export type ProjectTechnologyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    technology?: boolean | TechnologyDefaultArgs<ExtArgs>
  }

  export type $ProjectTechnologyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectTechnology"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      technology: Prisma.$TechnologyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      technologyId: string
    }, ExtArgs["result"]["projectTechnology"]>
    composites: {}
  }

  type ProjectTechnologyGetPayload<S extends boolean | null | undefined | ProjectTechnologyDefaultArgs> = $Result.GetResult<Prisma.$ProjectTechnologyPayload, S>

  type ProjectTechnologyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectTechnologyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectTechnologyCountAggregateInputType | true
    }

  export interface ProjectTechnologyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectTechnology'], meta: { name: 'ProjectTechnology' } }
    /**
     * Find zero or one ProjectTechnology that matches the filter.
     * @param {ProjectTechnologyFindUniqueArgs} args - Arguments to find a ProjectTechnology
     * @example
     * // Get one ProjectTechnology
     * const projectTechnology = await prisma.projectTechnology.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectTechnologyFindUniqueArgs>(args: SelectSubset<T, ProjectTechnologyFindUniqueArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectTechnology that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectTechnologyFindUniqueOrThrowArgs} args - Arguments to find a ProjectTechnology
     * @example
     * // Get one ProjectTechnology
     * const projectTechnology = await prisma.projectTechnology.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectTechnologyFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectTechnologyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTechnology that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechnologyFindFirstArgs} args - Arguments to find a ProjectTechnology
     * @example
     * // Get one ProjectTechnology
     * const projectTechnology = await prisma.projectTechnology.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectTechnologyFindFirstArgs>(args?: SelectSubset<T, ProjectTechnologyFindFirstArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTechnology that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechnologyFindFirstOrThrowArgs} args - Arguments to find a ProjectTechnology
     * @example
     * // Get one ProjectTechnology
     * const projectTechnology = await prisma.projectTechnology.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectTechnologyFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectTechnologyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectTechnologies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechnologyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectTechnologies
     * const projectTechnologies = await prisma.projectTechnology.findMany()
     * 
     * // Get first 10 ProjectTechnologies
     * const projectTechnologies = await prisma.projectTechnology.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectTechnologyWithIdOnly = await prisma.projectTechnology.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectTechnologyFindManyArgs>(args?: SelectSubset<T, ProjectTechnologyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectTechnology.
     * @param {ProjectTechnologyCreateArgs} args - Arguments to create a ProjectTechnology.
     * @example
     * // Create one ProjectTechnology
     * const ProjectTechnology = await prisma.projectTechnology.create({
     *   data: {
     *     // ... data to create a ProjectTechnology
     *   }
     * })
     * 
     */
    create<T extends ProjectTechnologyCreateArgs>(args: SelectSubset<T, ProjectTechnologyCreateArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectTechnologies.
     * @param {ProjectTechnologyCreateManyArgs} args - Arguments to create many ProjectTechnologies.
     * @example
     * // Create many ProjectTechnologies
     * const projectTechnology = await prisma.projectTechnology.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectTechnologyCreateManyArgs>(args?: SelectSubset<T, ProjectTechnologyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectTechnologies and returns the data saved in the database.
     * @param {ProjectTechnologyCreateManyAndReturnArgs} args - Arguments to create many ProjectTechnologies.
     * @example
     * // Create many ProjectTechnologies
     * const projectTechnology = await prisma.projectTechnology.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectTechnologies and only return the `id`
     * const projectTechnologyWithIdOnly = await prisma.projectTechnology.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectTechnologyCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectTechnologyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectTechnology.
     * @param {ProjectTechnologyDeleteArgs} args - Arguments to delete one ProjectTechnology.
     * @example
     * // Delete one ProjectTechnology
     * const ProjectTechnology = await prisma.projectTechnology.delete({
     *   where: {
     *     // ... filter to delete one ProjectTechnology
     *   }
     * })
     * 
     */
    delete<T extends ProjectTechnologyDeleteArgs>(args: SelectSubset<T, ProjectTechnologyDeleteArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectTechnology.
     * @param {ProjectTechnologyUpdateArgs} args - Arguments to update one ProjectTechnology.
     * @example
     * // Update one ProjectTechnology
     * const projectTechnology = await prisma.projectTechnology.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectTechnologyUpdateArgs>(args: SelectSubset<T, ProjectTechnologyUpdateArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectTechnologies.
     * @param {ProjectTechnologyDeleteManyArgs} args - Arguments to filter ProjectTechnologies to delete.
     * @example
     * // Delete a few ProjectTechnologies
     * const { count } = await prisma.projectTechnology.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectTechnologyDeleteManyArgs>(args?: SelectSubset<T, ProjectTechnologyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTechnologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechnologyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectTechnologies
     * const projectTechnology = await prisma.projectTechnology.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectTechnologyUpdateManyArgs>(args: SelectSubset<T, ProjectTechnologyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTechnologies and returns the data updated in the database.
     * @param {ProjectTechnologyUpdateManyAndReturnArgs} args - Arguments to update many ProjectTechnologies.
     * @example
     * // Update many ProjectTechnologies
     * const projectTechnology = await prisma.projectTechnology.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectTechnologies and only return the `id`
     * const projectTechnologyWithIdOnly = await prisma.projectTechnology.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectTechnologyUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectTechnologyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectTechnology.
     * @param {ProjectTechnologyUpsertArgs} args - Arguments to update or create a ProjectTechnology.
     * @example
     * // Update or create a ProjectTechnology
     * const projectTechnology = await prisma.projectTechnology.upsert({
     *   create: {
     *     // ... data to create a ProjectTechnology
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectTechnology we want to update
     *   }
     * })
     */
    upsert<T extends ProjectTechnologyUpsertArgs>(args: SelectSubset<T, ProjectTechnologyUpsertArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectTechnologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechnologyCountArgs} args - Arguments to filter ProjectTechnologies to count.
     * @example
     * // Count the number of ProjectTechnologies
     * const count = await prisma.projectTechnology.count({
     *   where: {
     *     // ... the filter for the ProjectTechnologies we want to count
     *   }
     * })
    **/
    count<T extends ProjectTechnologyCountArgs>(
      args?: Subset<T, ProjectTechnologyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectTechnologyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectTechnology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechnologyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectTechnologyAggregateArgs>(args: Subset<T, ProjectTechnologyAggregateArgs>): Prisma.PrismaPromise<GetProjectTechnologyAggregateType<T>>

    /**
     * Group by ProjectTechnology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechnologyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectTechnologyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectTechnologyGroupByArgs['orderBy'] }
        : { orderBy?: ProjectTechnologyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectTechnologyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectTechnologyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectTechnology model
   */
  readonly fields: ProjectTechnologyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectTechnology.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectTechnologyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    technology<T extends TechnologyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TechnologyDefaultArgs<ExtArgs>>): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectTechnology model
   */
  interface ProjectTechnologyFieldRefs {
    readonly id: FieldRef<"ProjectTechnology", 'String'>
    readonly projectId: FieldRef<"ProjectTechnology", 'String'>
    readonly technologyId: FieldRef<"ProjectTechnology", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectTechnology findUnique
   */
  export type ProjectTechnologyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTechnology to fetch.
     */
    where: ProjectTechnologyWhereUniqueInput
  }

  /**
   * ProjectTechnology findUniqueOrThrow
   */
  export type ProjectTechnologyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTechnology to fetch.
     */
    where: ProjectTechnologyWhereUniqueInput
  }

  /**
   * ProjectTechnology findFirst
   */
  export type ProjectTechnologyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTechnology to fetch.
     */
    where?: ProjectTechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTechnologies to fetch.
     */
    orderBy?: ProjectTechnologyOrderByWithRelationInput | ProjectTechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTechnologies.
     */
    cursor?: ProjectTechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTechnologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTechnologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTechnologies.
     */
    distinct?: ProjectTechnologyScalarFieldEnum | ProjectTechnologyScalarFieldEnum[]
  }

  /**
   * ProjectTechnology findFirstOrThrow
   */
  export type ProjectTechnologyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTechnology to fetch.
     */
    where?: ProjectTechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTechnologies to fetch.
     */
    orderBy?: ProjectTechnologyOrderByWithRelationInput | ProjectTechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTechnologies.
     */
    cursor?: ProjectTechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTechnologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTechnologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTechnologies.
     */
    distinct?: ProjectTechnologyScalarFieldEnum | ProjectTechnologyScalarFieldEnum[]
  }

  /**
   * ProjectTechnology findMany
   */
  export type ProjectTechnologyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTechnologies to fetch.
     */
    where?: ProjectTechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTechnologies to fetch.
     */
    orderBy?: ProjectTechnologyOrderByWithRelationInput | ProjectTechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectTechnologies.
     */
    cursor?: ProjectTechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTechnologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTechnologies.
     */
    skip?: number
    distinct?: ProjectTechnologyScalarFieldEnum | ProjectTechnologyScalarFieldEnum[]
  }

  /**
   * ProjectTechnology create
   */
  export type ProjectTechnologyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectTechnology.
     */
    data: XOR<ProjectTechnologyCreateInput, ProjectTechnologyUncheckedCreateInput>
  }

  /**
   * ProjectTechnology createMany
   */
  export type ProjectTechnologyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectTechnologies.
     */
    data: ProjectTechnologyCreateManyInput | ProjectTechnologyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectTechnology createManyAndReturn
   */
  export type ProjectTechnologyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectTechnologies.
     */
    data: ProjectTechnologyCreateManyInput | ProjectTechnologyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectTechnology update
   */
  export type ProjectTechnologyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectTechnology.
     */
    data: XOR<ProjectTechnologyUpdateInput, ProjectTechnologyUncheckedUpdateInput>
    /**
     * Choose, which ProjectTechnology to update.
     */
    where: ProjectTechnologyWhereUniqueInput
  }

  /**
   * ProjectTechnology updateMany
   */
  export type ProjectTechnologyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectTechnologies.
     */
    data: XOR<ProjectTechnologyUpdateManyMutationInput, ProjectTechnologyUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTechnologies to update
     */
    where?: ProjectTechnologyWhereInput
    /**
     * Limit how many ProjectTechnologies to update.
     */
    limit?: number
  }

  /**
   * ProjectTechnology updateManyAndReturn
   */
  export type ProjectTechnologyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * The data used to update ProjectTechnologies.
     */
    data: XOR<ProjectTechnologyUpdateManyMutationInput, ProjectTechnologyUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTechnologies to update
     */
    where?: ProjectTechnologyWhereInput
    /**
     * Limit how many ProjectTechnologies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectTechnology upsert
   */
  export type ProjectTechnologyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectTechnology to update in case it exists.
     */
    where: ProjectTechnologyWhereUniqueInput
    /**
     * In case the ProjectTechnology found by the `where` argument doesn't exist, create a new ProjectTechnology with this data.
     */
    create: XOR<ProjectTechnologyCreateInput, ProjectTechnologyUncheckedCreateInput>
    /**
     * In case the ProjectTechnology was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectTechnologyUpdateInput, ProjectTechnologyUncheckedUpdateInput>
  }

  /**
   * ProjectTechnology delete
   */
  export type ProjectTechnologyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * Filter which ProjectTechnology to delete.
     */
    where: ProjectTechnologyWhereUniqueInput
  }

  /**
   * ProjectTechnology deleteMany
   */
  export type ProjectTechnologyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTechnologies to delete
     */
    where?: ProjectTechnologyWhereInput
    /**
     * Limit how many ProjectTechnologies to delete.
     */
    limit?: number
  }

  /**
   * ProjectTechnology without action
   */
  export type ProjectTechnologyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
  }


  /**
   * Model Technology
   */

  export type AggregateTechnology = {
    _count: TechnologyCountAggregateOutputType | null
    _min: TechnologyMinAggregateOutputType | null
    _max: TechnologyMaxAggregateOutputType | null
  }

  export type TechnologyMinAggregateOutputType = {
    id: string | null
    name: string | null
    iconUrl: string | null
    category: $Enums.TechCategory | null
  }

  export type TechnologyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    iconUrl: string | null
    category: $Enums.TechCategory | null
  }

  export type TechnologyCountAggregateOutputType = {
    id: number
    name: number
    iconUrl: number
    category: number
    _all: number
  }


  export type TechnologyMinAggregateInputType = {
    id?: true
    name?: true
    iconUrl?: true
    category?: true
  }

  export type TechnologyMaxAggregateInputType = {
    id?: true
    name?: true
    iconUrl?: true
    category?: true
  }

  export type TechnologyCountAggregateInputType = {
    id?: true
    name?: true
    iconUrl?: true
    category?: true
    _all?: true
  }

  export type TechnologyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Technology to aggregate.
     */
    where?: TechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technologies to fetch.
     */
    orderBy?: TechnologyOrderByWithRelationInput | TechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Technologies
    **/
    _count?: true | TechnologyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechnologyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechnologyMaxAggregateInputType
  }

  export type GetTechnologyAggregateType<T extends TechnologyAggregateArgs> = {
        [P in keyof T & keyof AggregateTechnology]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechnology[P]>
      : GetScalarType<T[P], AggregateTechnology[P]>
  }




  export type TechnologyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechnologyWhereInput
    orderBy?: TechnologyOrderByWithAggregationInput | TechnologyOrderByWithAggregationInput[]
    by: TechnologyScalarFieldEnum[] | TechnologyScalarFieldEnum
    having?: TechnologyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechnologyCountAggregateInputType | true
    _min?: TechnologyMinAggregateInputType
    _max?: TechnologyMaxAggregateInputType
  }

  export type TechnologyGroupByOutputType = {
    id: string
    name: string
    iconUrl: string
    category: $Enums.TechCategory
    _count: TechnologyCountAggregateOutputType | null
    _min: TechnologyMinAggregateOutputType | null
    _max: TechnologyMaxAggregateOutputType | null
  }

  type GetTechnologyGroupByPayload<T extends TechnologyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechnologyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechnologyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechnologyGroupByOutputType[P]>
            : GetScalarType<T[P], TechnologyGroupByOutputType[P]>
        }
      >
    >


  export type TechnologySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iconUrl?: boolean
    category?: boolean
    projects?: boolean | Technology$projectsArgs<ExtArgs>
    users?: boolean | Technology$usersArgs<ExtArgs>
    _count?: boolean | TechnologyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["technology"]>

  export type TechnologySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iconUrl?: boolean
    category?: boolean
  }, ExtArgs["result"]["technology"]>

  export type TechnologySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iconUrl?: boolean
    category?: boolean
  }, ExtArgs["result"]["technology"]>

  export type TechnologySelectScalar = {
    id?: boolean
    name?: boolean
    iconUrl?: boolean
    category?: boolean
  }

  export type TechnologyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "iconUrl" | "category", ExtArgs["result"]["technology"]>
  export type TechnologyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Technology$projectsArgs<ExtArgs>
    users?: boolean | Technology$usersArgs<ExtArgs>
    _count?: boolean | TechnologyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TechnologyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TechnologyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TechnologyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Technology"
    objects: {
      projects: Prisma.$ProjectTechnologyPayload<ExtArgs>[]
      users: Prisma.$UserTechnologyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      iconUrl: string
      category: $Enums.TechCategory
    }, ExtArgs["result"]["technology"]>
    composites: {}
  }

  type TechnologyGetPayload<S extends boolean | null | undefined | TechnologyDefaultArgs> = $Result.GetResult<Prisma.$TechnologyPayload, S>

  type TechnologyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TechnologyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TechnologyCountAggregateInputType | true
    }

  export interface TechnologyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Technology'], meta: { name: 'Technology' } }
    /**
     * Find zero or one Technology that matches the filter.
     * @param {TechnologyFindUniqueArgs} args - Arguments to find a Technology
     * @example
     * // Get one Technology
     * const technology = await prisma.technology.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TechnologyFindUniqueArgs>(args: SelectSubset<T, TechnologyFindUniqueArgs<ExtArgs>>): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Technology that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TechnologyFindUniqueOrThrowArgs} args - Arguments to find a Technology
     * @example
     * // Get one Technology
     * const technology = await prisma.technology.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TechnologyFindUniqueOrThrowArgs>(args: SelectSubset<T, TechnologyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Technology that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyFindFirstArgs} args - Arguments to find a Technology
     * @example
     * // Get one Technology
     * const technology = await prisma.technology.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TechnologyFindFirstArgs>(args?: SelectSubset<T, TechnologyFindFirstArgs<ExtArgs>>): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Technology that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyFindFirstOrThrowArgs} args - Arguments to find a Technology
     * @example
     * // Get one Technology
     * const technology = await prisma.technology.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TechnologyFindFirstOrThrowArgs>(args?: SelectSubset<T, TechnologyFindFirstOrThrowArgs<ExtArgs>>): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Technologies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Technologies
     * const technologies = await prisma.technology.findMany()
     * 
     * // Get first 10 Technologies
     * const technologies = await prisma.technology.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const technologyWithIdOnly = await prisma.technology.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TechnologyFindManyArgs>(args?: SelectSubset<T, TechnologyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Technology.
     * @param {TechnologyCreateArgs} args - Arguments to create a Technology.
     * @example
     * // Create one Technology
     * const Technology = await prisma.technology.create({
     *   data: {
     *     // ... data to create a Technology
     *   }
     * })
     * 
     */
    create<T extends TechnologyCreateArgs>(args: SelectSubset<T, TechnologyCreateArgs<ExtArgs>>): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Technologies.
     * @param {TechnologyCreateManyArgs} args - Arguments to create many Technologies.
     * @example
     * // Create many Technologies
     * const technology = await prisma.technology.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TechnologyCreateManyArgs>(args?: SelectSubset<T, TechnologyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Technologies and returns the data saved in the database.
     * @param {TechnologyCreateManyAndReturnArgs} args - Arguments to create many Technologies.
     * @example
     * // Create many Technologies
     * const technology = await prisma.technology.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Technologies and only return the `id`
     * const technologyWithIdOnly = await prisma.technology.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TechnologyCreateManyAndReturnArgs>(args?: SelectSubset<T, TechnologyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Technology.
     * @param {TechnologyDeleteArgs} args - Arguments to delete one Technology.
     * @example
     * // Delete one Technology
     * const Technology = await prisma.technology.delete({
     *   where: {
     *     // ... filter to delete one Technology
     *   }
     * })
     * 
     */
    delete<T extends TechnologyDeleteArgs>(args: SelectSubset<T, TechnologyDeleteArgs<ExtArgs>>): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Technology.
     * @param {TechnologyUpdateArgs} args - Arguments to update one Technology.
     * @example
     * // Update one Technology
     * const technology = await prisma.technology.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TechnologyUpdateArgs>(args: SelectSubset<T, TechnologyUpdateArgs<ExtArgs>>): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Technologies.
     * @param {TechnologyDeleteManyArgs} args - Arguments to filter Technologies to delete.
     * @example
     * // Delete a few Technologies
     * const { count } = await prisma.technology.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TechnologyDeleteManyArgs>(args?: SelectSubset<T, TechnologyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Technologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Technologies
     * const technology = await prisma.technology.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TechnologyUpdateManyArgs>(args: SelectSubset<T, TechnologyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Technologies and returns the data updated in the database.
     * @param {TechnologyUpdateManyAndReturnArgs} args - Arguments to update many Technologies.
     * @example
     * // Update many Technologies
     * const technology = await prisma.technology.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Technologies and only return the `id`
     * const technologyWithIdOnly = await prisma.technology.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TechnologyUpdateManyAndReturnArgs>(args: SelectSubset<T, TechnologyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Technology.
     * @param {TechnologyUpsertArgs} args - Arguments to update or create a Technology.
     * @example
     * // Update or create a Technology
     * const technology = await prisma.technology.upsert({
     *   create: {
     *     // ... data to create a Technology
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Technology we want to update
     *   }
     * })
     */
    upsert<T extends TechnologyUpsertArgs>(args: SelectSubset<T, TechnologyUpsertArgs<ExtArgs>>): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Technologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyCountArgs} args - Arguments to filter Technologies to count.
     * @example
     * // Count the number of Technologies
     * const count = await prisma.technology.count({
     *   where: {
     *     // ... the filter for the Technologies we want to count
     *   }
     * })
    **/
    count<T extends TechnologyCountArgs>(
      args?: Subset<T, TechnologyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechnologyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Technology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TechnologyAggregateArgs>(args: Subset<T, TechnologyAggregateArgs>): Prisma.PrismaPromise<GetTechnologyAggregateType<T>>

    /**
     * Group by Technology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TechnologyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TechnologyGroupByArgs['orderBy'] }
        : { orderBy?: TechnologyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TechnologyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechnologyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Technology model
   */
  readonly fields: TechnologyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Technology.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TechnologyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends Technology$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Technology$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Technology$usersArgs<ExtArgs> = {}>(args?: Subset<T, Technology$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTechnologyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Technology model
   */
  interface TechnologyFieldRefs {
    readonly id: FieldRef<"Technology", 'String'>
    readonly name: FieldRef<"Technology", 'String'>
    readonly iconUrl: FieldRef<"Technology", 'String'>
    readonly category: FieldRef<"Technology", 'TechCategory'>
  }
    

  // Custom InputTypes
  /**
   * Technology findUnique
   */
  export type TechnologyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * Filter, which Technology to fetch.
     */
    where: TechnologyWhereUniqueInput
  }

  /**
   * Technology findUniqueOrThrow
   */
  export type TechnologyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * Filter, which Technology to fetch.
     */
    where: TechnologyWhereUniqueInput
  }

  /**
   * Technology findFirst
   */
  export type TechnologyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * Filter, which Technology to fetch.
     */
    where?: TechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technologies to fetch.
     */
    orderBy?: TechnologyOrderByWithRelationInput | TechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Technologies.
     */
    cursor?: TechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Technologies.
     */
    distinct?: TechnologyScalarFieldEnum | TechnologyScalarFieldEnum[]
  }

  /**
   * Technology findFirstOrThrow
   */
  export type TechnologyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * Filter, which Technology to fetch.
     */
    where?: TechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technologies to fetch.
     */
    orderBy?: TechnologyOrderByWithRelationInput | TechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Technologies.
     */
    cursor?: TechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Technologies.
     */
    distinct?: TechnologyScalarFieldEnum | TechnologyScalarFieldEnum[]
  }

  /**
   * Technology findMany
   */
  export type TechnologyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * Filter, which Technologies to fetch.
     */
    where?: TechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technologies to fetch.
     */
    orderBy?: TechnologyOrderByWithRelationInput | TechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Technologies.
     */
    cursor?: TechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technologies.
     */
    skip?: number
    distinct?: TechnologyScalarFieldEnum | TechnologyScalarFieldEnum[]
  }

  /**
   * Technology create
   */
  export type TechnologyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * The data needed to create a Technology.
     */
    data: XOR<TechnologyCreateInput, TechnologyUncheckedCreateInput>
  }

  /**
   * Technology createMany
   */
  export type TechnologyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Technologies.
     */
    data: TechnologyCreateManyInput | TechnologyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Technology createManyAndReturn
   */
  export type TechnologyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * The data used to create many Technologies.
     */
    data: TechnologyCreateManyInput | TechnologyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Technology update
   */
  export type TechnologyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * The data needed to update a Technology.
     */
    data: XOR<TechnologyUpdateInput, TechnologyUncheckedUpdateInput>
    /**
     * Choose, which Technology to update.
     */
    where: TechnologyWhereUniqueInput
  }

  /**
   * Technology updateMany
   */
  export type TechnologyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Technologies.
     */
    data: XOR<TechnologyUpdateManyMutationInput, TechnologyUncheckedUpdateManyInput>
    /**
     * Filter which Technologies to update
     */
    where?: TechnologyWhereInput
    /**
     * Limit how many Technologies to update.
     */
    limit?: number
  }

  /**
   * Technology updateManyAndReturn
   */
  export type TechnologyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * The data used to update Technologies.
     */
    data: XOR<TechnologyUpdateManyMutationInput, TechnologyUncheckedUpdateManyInput>
    /**
     * Filter which Technologies to update
     */
    where?: TechnologyWhereInput
    /**
     * Limit how many Technologies to update.
     */
    limit?: number
  }

  /**
   * Technology upsert
   */
  export type TechnologyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * The filter to search for the Technology to update in case it exists.
     */
    where: TechnologyWhereUniqueInput
    /**
     * In case the Technology found by the `where` argument doesn't exist, create a new Technology with this data.
     */
    create: XOR<TechnologyCreateInput, TechnologyUncheckedCreateInput>
    /**
     * In case the Technology was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TechnologyUpdateInput, TechnologyUncheckedUpdateInput>
  }

  /**
   * Technology delete
   */
  export type TechnologyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * Filter which Technology to delete.
     */
    where: TechnologyWhereUniqueInput
  }

  /**
   * Technology deleteMany
   */
  export type TechnologyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Technologies to delete
     */
    where?: TechnologyWhereInput
    /**
     * Limit how many Technologies to delete.
     */
    limit?: number
  }

  /**
   * Technology.projects
   */
  export type Technology$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    where?: ProjectTechnologyWhereInput
    orderBy?: ProjectTechnologyOrderByWithRelationInput | ProjectTechnologyOrderByWithRelationInput[]
    cursor?: ProjectTechnologyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectTechnologyScalarFieldEnum | ProjectTechnologyScalarFieldEnum[]
  }

  /**
   * Technology.users
   */
  export type Technology$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnology
     */
    select?: UserTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnology
     */
    omit?: UserTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnologyInclude<ExtArgs> | null
    where?: UserTechnologyWhereInput
    orderBy?: UserTechnologyOrderByWithRelationInput | UserTechnologyOrderByWithRelationInput[]
    cursor?: UserTechnologyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTechnologyScalarFieldEnum | UserTechnologyScalarFieldEnum[]
  }

  /**
   * Technology without action
   */
  export type TechnologyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyInclude<ExtArgs> | null
  }


  /**
   * Model ProjectDetail
   */

  export type AggregateProjectDetail = {
    _count: ProjectDetailCountAggregateOutputType | null
    _min: ProjectDetailMinAggregateOutputType | null
    _max: ProjectDetailMaxAggregateOutputType | null
  }

  export type ProjectDetailMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectDetailMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectDetailCountAggregateOutputType = {
    id: number
    projectId: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectDetailMinAggregateInputType = {
    id?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectDetailMaxAggregateInputType = {
    id?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectDetailCountAggregateInputType = {
    id?: true
    projectId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectDetail to aggregate.
     */
    where?: ProjectDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDetails to fetch.
     */
    orderBy?: ProjectDetailOrderByWithRelationInput | ProjectDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectDetails
    **/
    _count?: true | ProjectDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectDetailMaxAggregateInputType
  }

  export type GetProjectDetailAggregateType<T extends ProjectDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectDetail[P]>
      : GetScalarType<T[P], AggregateProjectDetail[P]>
  }




  export type ProjectDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDetailWhereInput
    orderBy?: ProjectDetailOrderByWithAggregationInput | ProjectDetailOrderByWithAggregationInput[]
    by: ProjectDetailScalarFieldEnum[] | ProjectDetailScalarFieldEnum
    having?: ProjectDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectDetailCountAggregateInputType | true
    _min?: ProjectDetailMinAggregateInputType
    _max?: ProjectDetailMaxAggregateInputType
  }

  export type ProjectDetailGroupByOutputType = {
    id: string
    projectId: string
    content: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ProjectDetailCountAggregateOutputType | null
    _min: ProjectDetailMinAggregateOutputType | null
    _max: ProjectDetailMaxAggregateOutputType | null
  }

  type GetProjectDetailGroupByPayload<T extends ProjectDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectDetailGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectDetailGroupByOutputType[P]>
        }
      >
    >


  export type ProjectDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectDetail"]>

  export type ProjectDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectDetail"]>

  export type ProjectDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectDetail"]>

  export type ProjectDetailSelectScalar = {
    id?: boolean
    projectId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["projectDetail"]>
  export type ProjectDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectDetail"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      content: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectDetail"]>
    composites: {}
  }

  type ProjectDetailGetPayload<S extends boolean | null | undefined | ProjectDetailDefaultArgs> = $Result.GetResult<Prisma.$ProjectDetailPayload, S>

  type ProjectDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectDetailCountAggregateInputType | true
    }

  export interface ProjectDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectDetail'], meta: { name: 'ProjectDetail' } }
    /**
     * Find zero or one ProjectDetail that matches the filter.
     * @param {ProjectDetailFindUniqueArgs} args - Arguments to find a ProjectDetail
     * @example
     * // Get one ProjectDetail
     * const projectDetail = await prisma.projectDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectDetailFindUniqueArgs>(args: SelectSubset<T, ProjectDetailFindUniqueArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectDetailFindUniqueOrThrowArgs} args - Arguments to find a ProjectDetail
     * @example
     * // Get one ProjectDetail
     * const projectDetail = await prisma.projectDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailFindFirstArgs} args - Arguments to find a ProjectDetail
     * @example
     * // Get one ProjectDetail
     * const projectDetail = await prisma.projectDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectDetailFindFirstArgs>(args?: SelectSubset<T, ProjectDetailFindFirstArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailFindFirstOrThrowArgs} args - Arguments to find a ProjectDetail
     * @example
     * // Get one ProjectDetail
     * const projectDetail = await prisma.projectDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectDetails
     * const projectDetails = await prisma.projectDetail.findMany()
     * 
     * // Get first 10 ProjectDetails
     * const projectDetails = await prisma.projectDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectDetailWithIdOnly = await prisma.projectDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectDetailFindManyArgs>(args?: SelectSubset<T, ProjectDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectDetail.
     * @param {ProjectDetailCreateArgs} args - Arguments to create a ProjectDetail.
     * @example
     * // Create one ProjectDetail
     * const ProjectDetail = await prisma.projectDetail.create({
     *   data: {
     *     // ... data to create a ProjectDetail
     *   }
     * })
     * 
     */
    create<T extends ProjectDetailCreateArgs>(args: SelectSubset<T, ProjectDetailCreateArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectDetails.
     * @param {ProjectDetailCreateManyArgs} args - Arguments to create many ProjectDetails.
     * @example
     * // Create many ProjectDetails
     * const projectDetail = await prisma.projectDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectDetailCreateManyArgs>(args?: SelectSubset<T, ProjectDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectDetails and returns the data saved in the database.
     * @param {ProjectDetailCreateManyAndReturnArgs} args - Arguments to create many ProjectDetails.
     * @example
     * // Create many ProjectDetails
     * const projectDetail = await prisma.projectDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectDetails and only return the `id`
     * const projectDetailWithIdOnly = await prisma.projectDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectDetail.
     * @param {ProjectDetailDeleteArgs} args - Arguments to delete one ProjectDetail.
     * @example
     * // Delete one ProjectDetail
     * const ProjectDetail = await prisma.projectDetail.delete({
     *   where: {
     *     // ... filter to delete one ProjectDetail
     *   }
     * })
     * 
     */
    delete<T extends ProjectDetailDeleteArgs>(args: SelectSubset<T, ProjectDetailDeleteArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectDetail.
     * @param {ProjectDetailUpdateArgs} args - Arguments to update one ProjectDetail.
     * @example
     * // Update one ProjectDetail
     * const projectDetail = await prisma.projectDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectDetailUpdateArgs>(args: SelectSubset<T, ProjectDetailUpdateArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectDetails.
     * @param {ProjectDetailDeleteManyArgs} args - Arguments to filter ProjectDetails to delete.
     * @example
     * // Delete a few ProjectDetails
     * const { count } = await prisma.projectDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDetailDeleteManyArgs>(args?: SelectSubset<T, ProjectDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectDetails
     * const projectDetail = await prisma.projectDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectDetailUpdateManyArgs>(args: SelectSubset<T, ProjectDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectDetails and returns the data updated in the database.
     * @param {ProjectDetailUpdateManyAndReturnArgs} args - Arguments to update many ProjectDetails.
     * @example
     * // Update many ProjectDetails
     * const projectDetail = await prisma.projectDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectDetails and only return the `id`
     * const projectDetailWithIdOnly = await prisma.projectDetail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectDetail.
     * @param {ProjectDetailUpsertArgs} args - Arguments to update or create a ProjectDetail.
     * @example
     * // Update or create a ProjectDetail
     * const projectDetail = await prisma.projectDetail.upsert({
     *   create: {
     *     // ... data to create a ProjectDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectDetail we want to update
     *   }
     * })
     */
    upsert<T extends ProjectDetailUpsertArgs>(args: SelectSubset<T, ProjectDetailUpsertArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailCountArgs} args - Arguments to filter ProjectDetails to count.
     * @example
     * // Count the number of ProjectDetails
     * const count = await prisma.projectDetail.count({
     *   where: {
     *     // ... the filter for the ProjectDetails we want to count
     *   }
     * })
    **/
    count<T extends ProjectDetailCountArgs>(
      args?: Subset<T, ProjectDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectDetailAggregateArgs>(args: Subset<T, ProjectDetailAggregateArgs>): Prisma.PrismaPromise<GetProjectDetailAggregateType<T>>

    /**
     * Group by ProjectDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectDetailGroupByArgs['orderBy'] }
        : { orderBy?: ProjectDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectDetail model
   */
  readonly fields: ProjectDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectDetail model
   */
  interface ProjectDetailFieldRefs {
    readonly id: FieldRef<"ProjectDetail", 'String'>
    readonly projectId: FieldRef<"ProjectDetail", 'String'>
    readonly content: FieldRef<"ProjectDetail", 'Json'>
    readonly createdAt: FieldRef<"ProjectDetail", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectDetail findUnique
   */
  export type ProjectDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDetail to fetch.
     */
    where: ProjectDetailWhereUniqueInput
  }

  /**
   * ProjectDetail findUniqueOrThrow
   */
  export type ProjectDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDetail to fetch.
     */
    where: ProjectDetailWhereUniqueInput
  }

  /**
   * ProjectDetail findFirst
   */
  export type ProjectDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDetail to fetch.
     */
    where?: ProjectDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDetails to fetch.
     */
    orderBy?: ProjectDetailOrderByWithRelationInput | ProjectDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectDetails.
     */
    cursor?: ProjectDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectDetails.
     */
    distinct?: ProjectDetailScalarFieldEnum | ProjectDetailScalarFieldEnum[]
  }

  /**
   * ProjectDetail findFirstOrThrow
   */
  export type ProjectDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDetail to fetch.
     */
    where?: ProjectDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDetails to fetch.
     */
    orderBy?: ProjectDetailOrderByWithRelationInput | ProjectDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectDetails.
     */
    cursor?: ProjectDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectDetails.
     */
    distinct?: ProjectDetailScalarFieldEnum | ProjectDetailScalarFieldEnum[]
  }

  /**
   * ProjectDetail findMany
   */
  export type ProjectDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDetails to fetch.
     */
    where?: ProjectDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDetails to fetch.
     */
    orderBy?: ProjectDetailOrderByWithRelationInput | ProjectDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectDetails.
     */
    cursor?: ProjectDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDetails.
     */
    skip?: number
    distinct?: ProjectDetailScalarFieldEnum | ProjectDetailScalarFieldEnum[]
  }

  /**
   * ProjectDetail create
   */
  export type ProjectDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectDetail.
     */
    data: XOR<ProjectDetailCreateInput, ProjectDetailUncheckedCreateInput>
  }

  /**
   * ProjectDetail createMany
   */
  export type ProjectDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectDetails.
     */
    data: ProjectDetailCreateManyInput | ProjectDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectDetail createManyAndReturn
   */
  export type ProjectDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectDetails.
     */
    data: ProjectDetailCreateManyInput | ProjectDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectDetail update
   */
  export type ProjectDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectDetail.
     */
    data: XOR<ProjectDetailUpdateInput, ProjectDetailUncheckedUpdateInput>
    /**
     * Choose, which ProjectDetail to update.
     */
    where: ProjectDetailWhereUniqueInput
  }

  /**
   * ProjectDetail updateMany
   */
  export type ProjectDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectDetails.
     */
    data: XOR<ProjectDetailUpdateManyMutationInput, ProjectDetailUncheckedUpdateManyInput>
    /**
     * Filter which ProjectDetails to update
     */
    where?: ProjectDetailWhereInput
    /**
     * Limit how many ProjectDetails to update.
     */
    limit?: number
  }

  /**
   * ProjectDetail updateManyAndReturn
   */
  export type ProjectDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * The data used to update ProjectDetails.
     */
    data: XOR<ProjectDetailUpdateManyMutationInput, ProjectDetailUncheckedUpdateManyInput>
    /**
     * Filter which ProjectDetails to update
     */
    where?: ProjectDetailWhereInput
    /**
     * Limit how many ProjectDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectDetail upsert
   */
  export type ProjectDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectDetail to update in case it exists.
     */
    where: ProjectDetailWhereUniqueInput
    /**
     * In case the ProjectDetail found by the `where` argument doesn't exist, create a new ProjectDetail with this data.
     */
    create: XOR<ProjectDetailCreateInput, ProjectDetailUncheckedCreateInput>
    /**
     * In case the ProjectDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectDetailUpdateInput, ProjectDetailUncheckedUpdateInput>
  }

  /**
   * ProjectDetail delete
   */
  export type ProjectDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
    /**
     * Filter which ProjectDetail to delete.
     */
    where: ProjectDetailWhereUniqueInput
  }

  /**
   * ProjectDetail deleteMany
   */
  export type ProjectDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectDetails to delete
     */
    where?: ProjectDetailWhereInput
    /**
     * Limit how many ProjectDetails to delete.
     */
    limit?: number
  }

  /**
   * ProjectDetail without action
   */
  export type ProjectDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetail
     */
    omit?: ProjectDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDetailInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    description: 'description',
    email: 'email',
    github: 'github',
    linkedin: 'linkedin',
    phoneNumber: 'phoneNumber',
    photoId: 'photoId',
    photoUrl: 'photoUrl',
    website: 'website'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserTechnologyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    technologyId: 'technologyId'
  };

  export type UserTechnologyScalarFieldEnum = (typeof UserTechnologyScalarFieldEnum)[keyof typeof UserTechnologyScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    category: 'category',
    featured: 'featured',
    githubUrl: 'githubUrl',
    liveUrl: 'liveUrl',
    title: 'title'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectThumbnailScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    url: 'url',
    publicId: 'publicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectThumbnailScalarFieldEnum = (typeof ProjectThumbnailScalarFieldEnum)[keyof typeof ProjectThumbnailScalarFieldEnum]


  export const ProjectTechnologyScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    technologyId: 'technologyId'
  };

  export type ProjectTechnologyScalarFieldEnum = (typeof ProjectTechnologyScalarFieldEnum)[keyof typeof ProjectTechnologyScalarFieldEnum]


  export const TechnologyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    iconUrl: 'iconUrl',
    category: 'category'
  };

  export type TechnologyScalarFieldEnum = (typeof TechnologyScalarFieldEnum)[keyof typeof TechnologyScalarFieldEnum]


  export const ProjectDetailScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectDetailScalarFieldEnum = (typeof ProjectDetailScalarFieldEnum)[keyof typeof ProjectDetailScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'CategoryProject'
   */
  export type EnumCategoryProjectFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryProject'>
    


  /**
   * Reference to a field of type 'CategoryProject[]'
   */
  export type ListEnumCategoryProjectFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryProject[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TechCategory'
   */
  export type EnumTechCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TechCategory'>
    


  /**
   * Reference to a field of type 'TechCategory[]'
   */
  export type ListEnumTechCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TechCategory[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    description?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    github?: StringNullableFilter<"User"> | string | null
    linkedin?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    photoId?: StringNullableFilter<"User"> | string | null
    photoUrl?: StringNullableFilter<"User"> | string | null
    website?: StringNullableFilter<"User"> | string | null
    projects?: ProjectListRelationFilter
    userTechnologies?: UserTechnologyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    description?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    photoId?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    projects?: ProjectOrderByRelationAggregateInput
    userTechnologies?: UserTechnologyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    description?: StringNullableFilter<"User"> | string | null
    github?: StringNullableFilter<"User"> | string | null
    linkedin?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    photoId?: StringNullableFilter<"User"> | string | null
    photoUrl?: StringNullableFilter<"User"> | string | null
    website?: StringNullableFilter<"User"> | string | null
    projects?: ProjectListRelationFilter
    userTechnologies?: UserTechnologyListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    description?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    photoId?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    description?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    github?: StringNullableWithAggregatesFilter<"User"> | string | null
    linkedin?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    photoId?: StringNullableWithAggregatesFilter<"User"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    website?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type UserTechnologyWhereInput = {
    AND?: UserTechnologyWhereInput | UserTechnologyWhereInput[]
    OR?: UserTechnologyWhereInput[]
    NOT?: UserTechnologyWhereInput | UserTechnologyWhereInput[]
    id?: StringFilter<"UserTechnology"> | string
    userId?: StringFilter<"UserTechnology"> | string
    technologyId?: StringFilter<"UserTechnology"> | string
    technology?: XOR<TechnologyScalarRelationFilter, TechnologyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserTechnologyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    technologyId?: SortOrder
    technology?: TechnologyOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserTechnologyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_technologyId?: UserTechnologyUserIdTechnologyIdCompoundUniqueInput
    AND?: UserTechnologyWhereInput | UserTechnologyWhereInput[]
    OR?: UserTechnologyWhereInput[]
    NOT?: UserTechnologyWhereInput | UserTechnologyWhereInput[]
    userId?: StringFilter<"UserTechnology"> | string
    technologyId?: StringFilter<"UserTechnology"> | string
    technology?: XOR<TechnologyScalarRelationFilter, TechnologyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_technologyId">

  export type UserTechnologyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    technologyId?: SortOrder
    _count?: UserTechnologyCountOrderByAggregateInput
    _max?: UserTechnologyMaxOrderByAggregateInput
    _min?: UserTechnologyMinOrderByAggregateInput
  }

  export type UserTechnologyScalarWhereWithAggregatesInput = {
    AND?: UserTechnologyScalarWhereWithAggregatesInput | UserTechnologyScalarWhereWithAggregatesInput[]
    OR?: UserTechnologyScalarWhereWithAggregatesInput[]
    NOT?: UserTechnologyScalarWhereWithAggregatesInput | UserTechnologyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserTechnology"> | string
    userId?: StringWithAggregatesFilter<"UserTechnology"> | string
    technologyId?: StringWithAggregatesFilter<"UserTechnology"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    startDate?: DateTimeFilter<"Project"> | Date | string
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    category?: EnumCategoryProjectFilter<"Project"> | $Enums.CategoryProject
    featured?: BoolFilter<"Project"> | boolean
    githubUrl?: StringNullableFilter<"Project"> | string | null
    liveUrl?: StringNullableFilter<"Project"> | string | null
    title?: StringFilter<"Project"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    projectDetail?: ProjectDetailListRelationFilter
    technologies?: ProjectTechnologyListRelationFilter
    thumbnail?: XOR<ProjectThumbnailNullableScalarRelationFilter, ProjectThumbnailWhereInput> | null
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    githubUrl?: SortOrderInput | SortOrder
    liveUrl?: SortOrderInput | SortOrder
    title?: SortOrder
    user?: UserOrderByWithRelationInput
    projectDetail?: ProjectDetailOrderByRelationAggregateInput
    technologies?: ProjectTechnologyOrderByRelationAggregateInput
    thumbnail?: ProjectThumbnailOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    userId?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    startDate?: DateTimeFilter<"Project"> | Date | string
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    category?: EnumCategoryProjectFilter<"Project"> | $Enums.CategoryProject
    featured?: BoolFilter<"Project"> | boolean
    githubUrl?: StringNullableFilter<"Project"> | string | null
    liveUrl?: StringNullableFilter<"Project"> | string | null
    title?: StringFilter<"Project"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    projectDetail?: ProjectDetailListRelationFilter
    technologies?: ProjectTechnologyListRelationFilter
    thumbnail?: XOR<ProjectThumbnailNullableScalarRelationFilter, ProjectThumbnailWhereInput> | null
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    githubUrl?: SortOrderInput | SortOrder
    liveUrl?: SortOrderInput | SortOrder
    title?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    userId?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    startDate?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    category?: EnumCategoryProjectWithAggregatesFilter<"Project"> | $Enums.CategoryProject
    featured?: BoolWithAggregatesFilter<"Project"> | boolean
    githubUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    liveUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    title?: StringWithAggregatesFilter<"Project"> | string
  }

  export type ProjectThumbnailWhereInput = {
    AND?: ProjectThumbnailWhereInput | ProjectThumbnailWhereInput[]
    OR?: ProjectThumbnailWhereInput[]
    NOT?: ProjectThumbnailWhereInput | ProjectThumbnailWhereInput[]
    id?: StringFilter<"ProjectThumbnail"> | string
    projectId?: StringFilter<"ProjectThumbnail"> | string
    url?: StringFilter<"ProjectThumbnail"> | string
    publicId?: StringFilter<"ProjectThumbnail"> | string
    createdAt?: DateTimeFilter<"ProjectThumbnail"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectThumbnail"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectThumbnailOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectThumbnailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    AND?: ProjectThumbnailWhereInput | ProjectThumbnailWhereInput[]
    OR?: ProjectThumbnailWhereInput[]
    NOT?: ProjectThumbnailWhereInput | ProjectThumbnailWhereInput[]
    url?: StringFilter<"ProjectThumbnail"> | string
    publicId?: StringFilter<"ProjectThumbnail"> | string
    createdAt?: DateTimeFilter<"ProjectThumbnail"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectThumbnail"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "projectId">

  export type ProjectThumbnailOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectThumbnailCountOrderByAggregateInput
    _max?: ProjectThumbnailMaxOrderByAggregateInput
    _min?: ProjectThumbnailMinOrderByAggregateInput
  }

  export type ProjectThumbnailScalarWhereWithAggregatesInput = {
    AND?: ProjectThumbnailScalarWhereWithAggregatesInput | ProjectThumbnailScalarWhereWithAggregatesInput[]
    OR?: ProjectThumbnailScalarWhereWithAggregatesInput[]
    NOT?: ProjectThumbnailScalarWhereWithAggregatesInput | ProjectThumbnailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectThumbnail"> | string
    projectId?: StringWithAggregatesFilter<"ProjectThumbnail"> | string
    url?: StringWithAggregatesFilter<"ProjectThumbnail"> | string
    publicId?: StringWithAggregatesFilter<"ProjectThumbnail"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectThumbnail"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectThumbnail"> | Date | string
  }

  export type ProjectTechnologyWhereInput = {
    AND?: ProjectTechnologyWhereInput | ProjectTechnologyWhereInput[]
    OR?: ProjectTechnologyWhereInput[]
    NOT?: ProjectTechnologyWhereInput | ProjectTechnologyWhereInput[]
    id?: StringFilter<"ProjectTechnology"> | string
    projectId?: StringFilter<"ProjectTechnology"> | string
    technologyId?: StringFilter<"ProjectTechnology"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    technology?: XOR<TechnologyScalarRelationFilter, TechnologyWhereInput>
  }

  export type ProjectTechnologyOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    technologyId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    technology?: TechnologyOrderByWithRelationInput
  }

  export type ProjectTechnologyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_technologyId?: ProjectTechnologyProjectIdTechnologyIdCompoundUniqueInput
    AND?: ProjectTechnologyWhereInput | ProjectTechnologyWhereInput[]
    OR?: ProjectTechnologyWhereInput[]
    NOT?: ProjectTechnologyWhereInput | ProjectTechnologyWhereInput[]
    projectId?: StringFilter<"ProjectTechnology"> | string
    technologyId?: StringFilter<"ProjectTechnology"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    technology?: XOR<TechnologyScalarRelationFilter, TechnologyWhereInput>
  }, "id" | "projectId_technologyId">

  export type ProjectTechnologyOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    technologyId?: SortOrder
    _count?: ProjectTechnologyCountOrderByAggregateInput
    _max?: ProjectTechnologyMaxOrderByAggregateInput
    _min?: ProjectTechnologyMinOrderByAggregateInput
  }

  export type ProjectTechnologyScalarWhereWithAggregatesInput = {
    AND?: ProjectTechnologyScalarWhereWithAggregatesInput | ProjectTechnologyScalarWhereWithAggregatesInput[]
    OR?: ProjectTechnologyScalarWhereWithAggregatesInput[]
    NOT?: ProjectTechnologyScalarWhereWithAggregatesInput | ProjectTechnologyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectTechnology"> | string
    projectId?: StringWithAggregatesFilter<"ProjectTechnology"> | string
    technologyId?: StringWithAggregatesFilter<"ProjectTechnology"> | string
  }

  export type TechnologyWhereInput = {
    AND?: TechnologyWhereInput | TechnologyWhereInput[]
    OR?: TechnologyWhereInput[]
    NOT?: TechnologyWhereInput | TechnologyWhereInput[]
    id?: StringFilter<"Technology"> | string
    name?: StringFilter<"Technology"> | string
    iconUrl?: StringFilter<"Technology"> | string
    category?: EnumTechCategoryFilter<"Technology"> | $Enums.TechCategory
    projects?: ProjectTechnologyListRelationFilter
    users?: UserTechnologyListRelationFilter
  }

  export type TechnologyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    iconUrl?: SortOrder
    category?: SortOrder
    projects?: ProjectTechnologyOrderByRelationAggregateInput
    users?: UserTechnologyOrderByRelationAggregateInput
  }

  export type TechnologyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TechnologyWhereInput | TechnologyWhereInput[]
    OR?: TechnologyWhereInput[]
    NOT?: TechnologyWhereInput | TechnologyWhereInput[]
    iconUrl?: StringFilter<"Technology"> | string
    category?: EnumTechCategoryFilter<"Technology"> | $Enums.TechCategory
    projects?: ProjectTechnologyListRelationFilter
    users?: UserTechnologyListRelationFilter
  }, "id" | "name">

  export type TechnologyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    iconUrl?: SortOrder
    category?: SortOrder
    _count?: TechnologyCountOrderByAggregateInput
    _max?: TechnologyMaxOrderByAggregateInput
    _min?: TechnologyMinOrderByAggregateInput
  }

  export type TechnologyScalarWhereWithAggregatesInput = {
    AND?: TechnologyScalarWhereWithAggregatesInput | TechnologyScalarWhereWithAggregatesInput[]
    OR?: TechnologyScalarWhereWithAggregatesInput[]
    NOT?: TechnologyScalarWhereWithAggregatesInput | TechnologyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Technology"> | string
    name?: StringWithAggregatesFilter<"Technology"> | string
    iconUrl?: StringWithAggregatesFilter<"Technology"> | string
    category?: EnumTechCategoryWithAggregatesFilter<"Technology"> | $Enums.TechCategory
  }

  export type ProjectDetailWhereInput = {
    AND?: ProjectDetailWhereInput | ProjectDetailWhereInput[]
    OR?: ProjectDetailWhereInput[]
    NOT?: ProjectDetailWhereInput | ProjectDetailWhereInput[]
    id?: StringFilter<"ProjectDetail"> | string
    projectId?: StringFilter<"ProjectDetail"> | string
    content?: JsonFilter<"ProjectDetail">
    createdAt?: DateTimeFilter<"ProjectDetail"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectDetail"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectDetailOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectDetailWhereInput | ProjectDetailWhereInput[]
    OR?: ProjectDetailWhereInput[]
    NOT?: ProjectDetailWhereInput | ProjectDetailWhereInput[]
    projectId?: StringFilter<"ProjectDetail"> | string
    content?: JsonFilter<"ProjectDetail">
    createdAt?: DateTimeFilter<"ProjectDetail"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectDetail"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ProjectDetailOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectDetailCountOrderByAggregateInput
    _max?: ProjectDetailMaxOrderByAggregateInput
    _min?: ProjectDetailMinOrderByAggregateInput
  }

  export type ProjectDetailScalarWhereWithAggregatesInput = {
    AND?: ProjectDetailScalarWhereWithAggregatesInput | ProjectDetailScalarWhereWithAggregatesInput[]
    OR?: ProjectDetailScalarWhereWithAggregatesInput[]
    NOT?: ProjectDetailScalarWhereWithAggregatesInput | ProjectDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectDetail"> | string
    projectId?: StringWithAggregatesFilter<"ProjectDetail"> | string
    content?: JsonWithAggregatesFilter<"ProjectDetail">
    createdAt?: DateTimeWithAggregatesFilter<"ProjectDetail"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectDetail"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    description?: string | null
    email?: string | null
    github?: string | null
    linkedin?: string | null
    phoneNumber?: string | null
    photoId?: string | null
    photoUrl?: string | null
    website?: string | null
    projects?: ProjectCreateNestedManyWithoutUserInput
    userTechnologies?: UserTechnologyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    description?: string | null
    email?: string | null
    github?: string | null
    linkedin?: string | null
    phoneNumber?: string | null
    photoId?: string | null
    photoUrl?: string | null
    website?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    userTechnologies?: UserTechnologyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoId?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutUserNestedInput
    userTechnologies?: UserTechnologyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoId?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    userTechnologies?: UserTechnologyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    description?: string | null
    email?: string | null
    github?: string | null
    linkedin?: string | null
    phoneNumber?: string | null
    photoId?: string | null
    photoUrl?: string | null
    website?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoId?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoId?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserTechnologyCreateInput = {
    id?: string
    technology: TechnologyCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutUserTechnologiesInput
  }

  export type UserTechnologyUncheckedCreateInput = {
    id?: string
    userId: string
    technologyId: string
  }

  export type UserTechnologyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    technology?: TechnologyUpdateOneRequiredWithoutUsersNestedInput
    user?: UserUpdateOneRequiredWithoutUserTechnologiesNestedInput
  }

  export type UserTechnologyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    technologyId?: StringFieldUpdateOperationsInput | string
  }

  export type UserTechnologyCreateManyInput = {
    id?: string
    userId: string
    technologyId: string
  }

  export type UserTechnologyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserTechnologyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    technologyId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    id?: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: $Enums.CategoryProject
    featured?: boolean
    githubUrl?: string | null
    liveUrl?: string | null
    title: string
    user: UserCreateNestedOneWithoutProjectsInput
    projectDetail?: ProjectDetailCreateNestedManyWithoutProjectInput
    technologies?: ProjectTechnologyCreateNestedManyWithoutProjectInput
    thumbnail?: ProjectThumbnailCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    userId: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: $Enums.CategoryProject
    featured?: boolean
    githubUrl?: string | null
    liveUrl?: string | null
    title: string
    projectDetail?: ProjectDetailUncheckedCreateNestedManyWithoutProjectInput
    technologies?: ProjectTechnologyUncheckedCreateNestedManyWithoutProjectInput
    thumbnail?: ProjectThumbnailUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryProjectFieldUpdateOperationsInput | $Enums.CategoryProject
    featured?: BoolFieldUpdateOperationsInput | boolean
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    projectDetail?: ProjectDetailUpdateManyWithoutProjectNestedInput
    technologies?: ProjectTechnologyUpdateManyWithoutProjectNestedInput
    thumbnail?: ProjectThumbnailUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryProjectFieldUpdateOperationsInput | $Enums.CategoryProject
    featured?: BoolFieldUpdateOperationsInput | boolean
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    projectDetail?: ProjectDetailUncheckedUpdateManyWithoutProjectNestedInput
    technologies?: ProjectTechnologyUncheckedUpdateManyWithoutProjectNestedInput
    thumbnail?: ProjectThumbnailUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    userId: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: $Enums.CategoryProject
    featured?: boolean
    githubUrl?: string | null
    liveUrl?: string | null
    title: string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryProjectFieldUpdateOperationsInput | $Enums.CategoryProject
    featured?: BoolFieldUpdateOperationsInput | boolean
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryProjectFieldUpdateOperationsInput | $Enums.CategoryProject
    featured?: BoolFieldUpdateOperationsInput | boolean
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectThumbnailCreateInput = {
    id?: string
    url: string
    publicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutThumbnailInput
  }

  export type ProjectThumbnailUncheckedCreateInput = {
    id?: string
    projectId: string
    url: string
    publicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectThumbnailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutThumbnailNestedInput
  }

  export type ProjectThumbnailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectThumbnailCreateManyInput = {
    id?: string
    projectId: string
    url: string
    publicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectThumbnailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectThumbnailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTechnologyCreateInput = {
    id?: string
    project: ProjectCreateNestedOneWithoutTechnologiesInput
    technology: TechnologyCreateNestedOneWithoutProjectsInput
  }

  export type ProjectTechnologyUncheckedCreateInput = {
    id?: string
    projectId: string
    technologyId: string
  }

  export type ProjectTechnologyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutTechnologiesNestedInput
    technology?: TechnologyUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectTechnologyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    technologyId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTechnologyCreateManyInput = {
    id?: string
    projectId: string
    technologyId: string
  }

  export type ProjectTechnologyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTechnologyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    technologyId?: StringFieldUpdateOperationsInput | string
  }

  export type TechnologyCreateInput = {
    id?: string
    name: string
    iconUrl: string
    category: $Enums.TechCategory
    projects?: ProjectTechnologyCreateNestedManyWithoutTechnologyInput
    users?: UserTechnologyCreateNestedManyWithoutTechnologyInput
  }

  export type TechnologyUncheckedCreateInput = {
    id?: string
    name: string
    iconUrl: string
    category: $Enums.TechCategory
    projects?: ProjectTechnologyUncheckedCreateNestedManyWithoutTechnologyInput
    users?: UserTechnologyUncheckedCreateNestedManyWithoutTechnologyInput
  }

  export type TechnologyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconUrl?: StringFieldUpdateOperationsInput | string
    category?: EnumTechCategoryFieldUpdateOperationsInput | $Enums.TechCategory
    projects?: ProjectTechnologyUpdateManyWithoutTechnologyNestedInput
    users?: UserTechnologyUpdateManyWithoutTechnologyNestedInput
  }

  export type TechnologyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconUrl?: StringFieldUpdateOperationsInput | string
    category?: EnumTechCategoryFieldUpdateOperationsInput | $Enums.TechCategory
    projects?: ProjectTechnologyUncheckedUpdateManyWithoutTechnologyNestedInput
    users?: UserTechnologyUncheckedUpdateManyWithoutTechnologyNestedInput
  }

  export type TechnologyCreateManyInput = {
    id?: string
    name: string
    iconUrl: string
    category: $Enums.TechCategory
  }

  export type TechnologyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconUrl?: StringFieldUpdateOperationsInput | string
    category?: EnumTechCategoryFieldUpdateOperationsInput | $Enums.TechCategory
  }

  export type TechnologyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconUrl?: StringFieldUpdateOperationsInput | string
    category?: EnumTechCategoryFieldUpdateOperationsInput | $Enums.TechCategory
  }

  export type ProjectDetailCreateInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectDetailInput
  }

  export type ProjectDetailUncheckedCreateInput = {
    id?: string
    projectId: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectDetailNestedInput
  }

  export type ProjectDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDetailCreateManyInput = {
    id?: string
    projectId: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type UserTechnologyListRelationFilter = {
    every?: UserTechnologyWhereInput
    some?: UserTechnologyWhereInput
    none?: UserTechnologyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserTechnologyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    description?: SortOrder
    email?: SortOrder
    github?: SortOrder
    linkedin?: SortOrder
    phoneNumber?: SortOrder
    photoId?: SortOrder
    photoUrl?: SortOrder
    website?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    description?: SortOrder
    email?: SortOrder
    github?: SortOrder
    linkedin?: SortOrder
    phoneNumber?: SortOrder
    photoId?: SortOrder
    photoUrl?: SortOrder
    website?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    description?: SortOrder
    email?: SortOrder
    github?: SortOrder
    linkedin?: SortOrder
    phoneNumber?: SortOrder
    photoId?: SortOrder
    photoUrl?: SortOrder
    website?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TechnologyScalarRelationFilter = {
    is?: TechnologyWhereInput
    isNot?: TechnologyWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserTechnologyUserIdTechnologyIdCompoundUniqueInput = {
    userId: string
    technologyId: string
  }

  export type UserTechnologyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    technologyId?: SortOrder
  }

  export type UserTechnologyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    technologyId?: SortOrder
  }

  export type UserTechnologyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    technologyId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumCategoryProjectFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryProject | EnumCategoryProjectFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryProject[] | ListEnumCategoryProjectFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryProject[] | ListEnumCategoryProjectFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryProjectFilter<$PrismaModel> | $Enums.CategoryProject
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProjectDetailListRelationFilter = {
    every?: ProjectDetailWhereInput
    some?: ProjectDetailWhereInput
    none?: ProjectDetailWhereInput
  }

  export type ProjectTechnologyListRelationFilter = {
    every?: ProjectTechnologyWhereInput
    some?: ProjectTechnologyWhereInput
    none?: ProjectTechnologyWhereInput
  }

  export type ProjectThumbnailNullableScalarRelationFilter = {
    is?: ProjectThumbnailWhereInput | null
    isNot?: ProjectThumbnailWhereInput | null
  }

  export type ProjectDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectTechnologyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    githubUrl?: SortOrder
    liveUrl?: SortOrder
    title?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    githubUrl?: SortOrder
    liveUrl?: SortOrder
    title?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    githubUrl?: SortOrder
    liveUrl?: SortOrder
    title?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumCategoryProjectWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryProject | EnumCategoryProjectFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryProject[] | ListEnumCategoryProjectFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryProject[] | ListEnumCategoryProjectFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryProjectWithAggregatesFilter<$PrismaModel> | $Enums.CategoryProject
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryProjectFilter<$PrismaModel>
    _max?: NestedEnumCategoryProjectFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectThumbnailCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectThumbnailMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectThumbnailMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectTechnologyProjectIdTechnologyIdCompoundUniqueInput = {
    projectId: string
    technologyId: string
  }

  export type ProjectTechnologyCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    technologyId?: SortOrder
  }

  export type ProjectTechnologyMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    technologyId?: SortOrder
  }

  export type ProjectTechnologyMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    technologyId?: SortOrder
  }

  export type EnumTechCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TechCategory | EnumTechCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TechCategory[] | ListEnumTechCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechCategory[] | ListEnumTechCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTechCategoryFilter<$PrismaModel> | $Enums.TechCategory
  }

  export type TechnologyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iconUrl?: SortOrder
    category?: SortOrder
  }

  export type TechnologyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iconUrl?: SortOrder
    category?: SortOrder
  }

  export type TechnologyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iconUrl?: SortOrder
    category?: SortOrder
  }

  export type EnumTechCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TechCategory | EnumTechCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TechCategory[] | ListEnumTechCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechCategory[] | ListEnumTechCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTechCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TechCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTechCategoryFilter<$PrismaModel>
    _max?: NestedEnumTechCategoryFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProjectDetailCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectDetailMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type UserTechnologyCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTechnologyCreateWithoutUserInput, UserTechnologyUncheckedCreateWithoutUserInput> | UserTechnologyCreateWithoutUserInput[] | UserTechnologyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTechnologyCreateOrConnectWithoutUserInput | UserTechnologyCreateOrConnectWithoutUserInput[]
    createMany?: UserTechnologyCreateManyUserInputEnvelope
    connect?: UserTechnologyWhereUniqueInput | UserTechnologyWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type UserTechnologyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTechnologyCreateWithoutUserInput, UserTechnologyUncheckedCreateWithoutUserInput> | UserTechnologyCreateWithoutUserInput[] | UserTechnologyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTechnologyCreateOrConnectWithoutUserInput | UserTechnologyCreateOrConnectWithoutUserInput[]
    createMany?: UserTechnologyCreateManyUserInputEnvelope
    connect?: UserTechnologyWhereUniqueInput | UserTechnologyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserTechnologyUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTechnologyCreateWithoutUserInput, UserTechnologyUncheckedCreateWithoutUserInput> | UserTechnologyCreateWithoutUserInput[] | UserTechnologyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTechnologyCreateOrConnectWithoutUserInput | UserTechnologyCreateOrConnectWithoutUserInput[]
    upsert?: UserTechnologyUpsertWithWhereUniqueWithoutUserInput | UserTechnologyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTechnologyCreateManyUserInputEnvelope
    set?: UserTechnologyWhereUniqueInput | UserTechnologyWhereUniqueInput[]
    disconnect?: UserTechnologyWhereUniqueInput | UserTechnologyWhereUniqueInput[]
    delete?: UserTechnologyWhereUniqueInput | UserTechnologyWhereUniqueInput[]
    connect?: UserTechnologyWhereUniqueInput | UserTechnologyWhereUniqueInput[]
    update?: UserTechnologyUpdateWithWhereUniqueWithoutUserInput | UserTechnologyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTechnologyUpdateManyWithWhereWithoutUserInput | UserTechnologyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTechnologyScalarWhereInput | UserTechnologyScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserTechnologyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTechnologyCreateWithoutUserInput, UserTechnologyUncheckedCreateWithoutUserInput> | UserTechnologyCreateWithoutUserInput[] | UserTechnologyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTechnologyCreateOrConnectWithoutUserInput | UserTechnologyCreateOrConnectWithoutUserInput[]
    upsert?: UserTechnologyUpsertWithWhereUniqueWithoutUserInput | UserTechnologyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTechnologyCreateManyUserInputEnvelope
    set?: UserTechnologyWhereUniqueInput | UserTechnologyWhereUniqueInput[]
    disconnect?: UserTechnologyWhereUniqueInput | UserTechnologyWhereUniqueInput[]
    delete?: UserTechnologyWhereUniqueInput | UserTechnologyWhereUniqueInput[]
    connect?: UserTechnologyWhereUniqueInput | UserTechnologyWhereUniqueInput[]
    update?: UserTechnologyUpdateWithWhereUniqueWithoutUserInput | UserTechnologyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTechnologyUpdateManyWithWhereWithoutUserInput | UserTechnologyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTechnologyScalarWhereInput | UserTechnologyScalarWhereInput[]
  }

  export type TechnologyCreateNestedOneWithoutUsersInput = {
    create?: XOR<TechnologyCreateWithoutUsersInput, TechnologyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TechnologyCreateOrConnectWithoutUsersInput
    connect?: TechnologyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserTechnologiesInput = {
    create?: XOR<UserCreateWithoutUserTechnologiesInput, UserUncheckedCreateWithoutUserTechnologiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTechnologiesInput
    connect?: UserWhereUniqueInput
  }

  export type TechnologyUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<TechnologyCreateWithoutUsersInput, TechnologyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TechnologyCreateOrConnectWithoutUsersInput
    upsert?: TechnologyUpsertWithoutUsersInput
    connect?: TechnologyWhereUniqueInput
    update?: XOR<XOR<TechnologyUpdateToOneWithWhereWithoutUsersInput, TechnologyUpdateWithoutUsersInput>, TechnologyUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutUserTechnologiesNestedInput = {
    create?: XOR<UserCreateWithoutUserTechnologiesInput, UserUncheckedCreateWithoutUserTechnologiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTechnologiesInput
    upsert?: UserUpsertWithoutUserTechnologiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserTechnologiesInput, UserUpdateWithoutUserTechnologiesInput>, UserUncheckedUpdateWithoutUserTechnologiesInput>
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectDetailCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectDetailCreateWithoutProjectInput, ProjectDetailUncheckedCreateWithoutProjectInput> | ProjectDetailCreateWithoutProjectInput[] | ProjectDetailUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDetailCreateOrConnectWithoutProjectInput | ProjectDetailCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectDetailCreateManyProjectInputEnvelope
    connect?: ProjectDetailWhereUniqueInput | ProjectDetailWhereUniqueInput[]
  }

  export type ProjectTechnologyCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectTechnologyCreateWithoutProjectInput, ProjectTechnologyUncheckedCreateWithoutProjectInput> | ProjectTechnologyCreateWithoutProjectInput[] | ProjectTechnologyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTechnologyCreateOrConnectWithoutProjectInput | ProjectTechnologyCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectTechnologyCreateManyProjectInputEnvelope
    connect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
  }

  export type ProjectThumbnailCreateNestedOneWithoutProjectInput = {
    create?: XOR<ProjectThumbnailCreateWithoutProjectInput, ProjectThumbnailUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectThumbnailCreateOrConnectWithoutProjectInput
    connect?: ProjectThumbnailWhereUniqueInput
  }

  export type ProjectDetailUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectDetailCreateWithoutProjectInput, ProjectDetailUncheckedCreateWithoutProjectInput> | ProjectDetailCreateWithoutProjectInput[] | ProjectDetailUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDetailCreateOrConnectWithoutProjectInput | ProjectDetailCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectDetailCreateManyProjectInputEnvelope
    connect?: ProjectDetailWhereUniqueInput | ProjectDetailWhereUniqueInput[]
  }

  export type ProjectTechnologyUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectTechnologyCreateWithoutProjectInput, ProjectTechnologyUncheckedCreateWithoutProjectInput> | ProjectTechnologyCreateWithoutProjectInput[] | ProjectTechnologyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTechnologyCreateOrConnectWithoutProjectInput | ProjectTechnologyCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectTechnologyCreateManyProjectInputEnvelope
    connect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
  }

  export type ProjectThumbnailUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<ProjectThumbnailCreateWithoutProjectInput, ProjectThumbnailUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectThumbnailCreateOrConnectWithoutProjectInput
    connect?: ProjectThumbnailWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumCategoryProjectFieldUpdateOperationsInput = {
    set?: $Enums.CategoryProject
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectDetailUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectDetailCreateWithoutProjectInput, ProjectDetailUncheckedCreateWithoutProjectInput> | ProjectDetailCreateWithoutProjectInput[] | ProjectDetailUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDetailCreateOrConnectWithoutProjectInput | ProjectDetailCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectDetailUpsertWithWhereUniqueWithoutProjectInput | ProjectDetailUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectDetailCreateManyProjectInputEnvelope
    set?: ProjectDetailWhereUniqueInput | ProjectDetailWhereUniqueInput[]
    disconnect?: ProjectDetailWhereUniqueInput | ProjectDetailWhereUniqueInput[]
    delete?: ProjectDetailWhereUniqueInput | ProjectDetailWhereUniqueInput[]
    connect?: ProjectDetailWhereUniqueInput | ProjectDetailWhereUniqueInput[]
    update?: ProjectDetailUpdateWithWhereUniqueWithoutProjectInput | ProjectDetailUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectDetailUpdateManyWithWhereWithoutProjectInput | ProjectDetailUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectDetailScalarWhereInput | ProjectDetailScalarWhereInput[]
  }

  export type ProjectTechnologyUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectTechnologyCreateWithoutProjectInput, ProjectTechnologyUncheckedCreateWithoutProjectInput> | ProjectTechnologyCreateWithoutProjectInput[] | ProjectTechnologyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTechnologyCreateOrConnectWithoutProjectInput | ProjectTechnologyCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectTechnologyUpsertWithWhereUniqueWithoutProjectInput | ProjectTechnologyUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectTechnologyCreateManyProjectInputEnvelope
    set?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    disconnect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    delete?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    connect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    update?: ProjectTechnologyUpdateWithWhereUniqueWithoutProjectInput | ProjectTechnologyUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectTechnologyUpdateManyWithWhereWithoutProjectInput | ProjectTechnologyUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectTechnologyScalarWhereInput | ProjectTechnologyScalarWhereInput[]
  }

  export type ProjectThumbnailUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ProjectThumbnailCreateWithoutProjectInput, ProjectThumbnailUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectThumbnailCreateOrConnectWithoutProjectInput
    upsert?: ProjectThumbnailUpsertWithoutProjectInput
    disconnect?: ProjectThumbnailWhereInput | boolean
    delete?: ProjectThumbnailWhereInput | boolean
    connect?: ProjectThumbnailWhereUniqueInput
    update?: XOR<XOR<ProjectThumbnailUpdateToOneWithWhereWithoutProjectInput, ProjectThumbnailUpdateWithoutProjectInput>, ProjectThumbnailUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectDetailUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectDetailCreateWithoutProjectInput, ProjectDetailUncheckedCreateWithoutProjectInput> | ProjectDetailCreateWithoutProjectInput[] | ProjectDetailUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDetailCreateOrConnectWithoutProjectInput | ProjectDetailCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectDetailUpsertWithWhereUniqueWithoutProjectInput | ProjectDetailUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectDetailCreateManyProjectInputEnvelope
    set?: ProjectDetailWhereUniqueInput | ProjectDetailWhereUniqueInput[]
    disconnect?: ProjectDetailWhereUniqueInput | ProjectDetailWhereUniqueInput[]
    delete?: ProjectDetailWhereUniqueInput | ProjectDetailWhereUniqueInput[]
    connect?: ProjectDetailWhereUniqueInput | ProjectDetailWhereUniqueInput[]
    update?: ProjectDetailUpdateWithWhereUniqueWithoutProjectInput | ProjectDetailUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectDetailUpdateManyWithWhereWithoutProjectInput | ProjectDetailUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectDetailScalarWhereInput | ProjectDetailScalarWhereInput[]
  }

  export type ProjectTechnologyUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectTechnologyCreateWithoutProjectInput, ProjectTechnologyUncheckedCreateWithoutProjectInput> | ProjectTechnologyCreateWithoutProjectInput[] | ProjectTechnologyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTechnologyCreateOrConnectWithoutProjectInput | ProjectTechnologyCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectTechnologyUpsertWithWhereUniqueWithoutProjectInput | ProjectTechnologyUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectTechnologyCreateManyProjectInputEnvelope
    set?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    disconnect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    delete?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    connect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    update?: ProjectTechnologyUpdateWithWhereUniqueWithoutProjectInput | ProjectTechnologyUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectTechnologyUpdateManyWithWhereWithoutProjectInput | ProjectTechnologyUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectTechnologyScalarWhereInput | ProjectTechnologyScalarWhereInput[]
  }

  export type ProjectThumbnailUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ProjectThumbnailCreateWithoutProjectInput, ProjectThumbnailUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectThumbnailCreateOrConnectWithoutProjectInput
    upsert?: ProjectThumbnailUpsertWithoutProjectInput
    disconnect?: ProjectThumbnailWhereInput | boolean
    delete?: ProjectThumbnailWhereInput | boolean
    connect?: ProjectThumbnailWhereUniqueInput
    update?: XOR<XOR<ProjectThumbnailUpdateToOneWithWhereWithoutProjectInput, ProjectThumbnailUpdateWithoutProjectInput>, ProjectThumbnailUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectCreateNestedOneWithoutThumbnailInput = {
    create?: XOR<ProjectCreateWithoutThumbnailInput, ProjectUncheckedCreateWithoutThumbnailInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutThumbnailInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutThumbnailNestedInput = {
    create?: XOR<ProjectCreateWithoutThumbnailInput, ProjectUncheckedCreateWithoutThumbnailInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutThumbnailInput
    upsert?: ProjectUpsertWithoutThumbnailInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutThumbnailInput, ProjectUpdateWithoutThumbnailInput>, ProjectUncheckedUpdateWithoutThumbnailInput>
  }

  export type ProjectCreateNestedOneWithoutTechnologiesInput = {
    create?: XOR<ProjectCreateWithoutTechnologiesInput, ProjectUncheckedCreateWithoutTechnologiesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTechnologiesInput
    connect?: ProjectWhereUniqueInput
  }

  export type TechnologyCreateNestedOneWithoutProjectsInput = {
    create?: XOR<TechnologyCreateWithoutProjectsInput, TechnologyUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TechnologyCreateOrConnectWithoutProjectsInput
    connect?: TechnologyWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutTechnologiesNestedInput = {
    create?: XOR<ProjectCreateWithoutTechnologiesInput, ProjectUncheckedCreateWithoutTechnologiesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTechnologiesInput
    upsert?: ProjectUpsertWithoutTechnologiesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTechnologiesInput, ProjectUpdateWithoutTechnologiesInput>, ProjectUncheckedUpdateWithoutTechnologiesInput>
  }

  export type TechnologyUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<TechnologyCreateWithoutProjectsInput, TechnologyUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TechnologyCreateOrConnectWithoutProjectsInput
    upsert?: TechnologyUpsertWithoutProjectsInput
    connect?: TechnologyWhereUniqueInput
    update?: XOR<XOR<TechnologyUpdateToOneWithWhereWithoutProjectsInput, TechnologyUpdateWithoutProjectsInput>, TechnologyUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectTechnologyCreateNestedManyWithoutTechnologyInput = {
    create?: XOR<ProjectTechnologyCreateWithoutTechnologyInput, ProjectTechnologyUncheckedCreateWithoutTechnologyInput> | ProjectTechnologyCreateWithoutTechnologyInput[] | ProjectTechnologyUncheckedCreateWithoutTechnologyInput[]
    connectOrCreate?: ProjectTechnologyCreateOrConnectWithoutTechnologyInput | ProjectTechnologyCreateOrConnectWithoutTechnologyInput[]
    createMany?: ProjectTechnologyCreateManyTechnologyInputEnvelope
    connect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
  }

  export type UserTechnologyCreateNestedManyWithoutTechnologyInput = {
    create?: XOR<UserTechnologyCreateWithoutTechnologyInput, UserTechnologyUncheckedCreateWithoutTechnologyInput> | UserTechnologyCreateWithoutTechnologyInput[] | UserTechnologyUncheckedCreateWithoutTechnologyInput[]
    connectOrCreate?: UserTechnologyCreateOrConnectWithoutTechnologyInput | UserTechnologyCreateOrConnectWithoutTechnologyInput[]
    createMany?: UserTechnologyCreateManyTechnologyInputEnvelope
    connect?: UserTechnologyWhereUniqueInput | UserTechnologyWhereUniqueInput[]
  }

  export type ProjectTechnologyUncheckedCreateNestedManyWithoutTechnologyInput = {
    create?: XOR<ProjectTechnologyCreateWithoutTechnologyInput, ProjectTechnologyUncheckedCreateWithoutTechnologyInput> | ProjectTechnologyCreateWithoutTechnologyInput[] | ProjectTechnologyUncheckedCreateWithoutTechnologyInput[]
    connectOrCreate?: ProjectTechnologyCreateOrConnectWithoutTechnologyInput | ProjectTechnologyCreateOrConnectWithoutTechnologyInput[]
    createMany?: ProjectTechnologyCreateManyTechnologyInputEnvelope
    connect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
  }

  export type UserTechnologyUncheckedCreateNestedManyWithoutTechnologyInput = {
    create?: XOR<UserTechnologyCreateWithoutTechnologyInput, UserTechnologyUncheckedCreateWithoutTechnologyInput> | UserTechnologyCreateWithoutTechnologyInput[] | UserTechnologyUncheckedCreateWithoutTechnologyInput[]
    connectOrCreate?: UserTechnologyCreateOrConnectWithoutTechnologyInput | UserTechnologyCreateOrConnectWithoutTechnologyInput[]
    createMany?: UserTechnologyCreateManyTechnologyInputEnvelope
    connect?: UserTechnologyWhereUniqueInput | UserTechnologyWhereUniqueInput[]
  }

  export type EnumTechCategoryFieldUpdateOperationsInput = {
    set?: $Enums.TechCategory
  }

  export type ProjectTechnologyUpdateManyWithoutTechnologyNestedInput = {
    create?: XOR<ProjectTechnologyCreateWithoutTechnologyInput, ProjectTechnologyUncheckedCreateWithoutTechnologyInput> | ProjectTechnologyCreateWithoutTechnologyInput[] | ProjectTechnologyUncheckedCreateWithoutTechnologyInput[]
    connectOrCreate?: ProjectTechnologyCreateOrConnectWithoutTechnologyInput | ProjectTechnologyCreateOrConnectWithoutTechnologyInput[]
    upsert?: ProjectTechnologyUpsertWithWhereUniqueWithoutTechnologyInput | ProjectTechnologyUpsertWithWhereUniqueWithoutTechnologyInput[]
    createMany?: ProjectTechnologyCreateManyTechnologyInputEnvelope
    set?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    disconnect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    delete?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    connect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    update?: ProjectTechnologyUpdateWithWhereUniqueWithoutTechnologyInput | ProjectTechnologyUpdateWithWhereUniqueWithoutTechnologyInput[]
    updateMany?: ProjectTechnologyUpdateManyWithWhereWithoutTechnologyInput | ProjectTechnologyUpdateManyWithWhereWithoutTechnologyInput[]
    deleteMany?: ProjectTechnologyScalarWhereInput | ProjectTechnologyScalarWhereInput[]
  }

  export type UserTechnologyUpdateManyWithoutTechnologyNestedInput = {
    create?: XOR<UserTechnologyCreateWithoutTechnologyInput, UserTechnologyUncheckedCreateWithoutTechnologyInput> | UserTechnologyCreateWithoutTechnologyInput[] | UserTechnologyUncheckedCreateWithoutTechnologyInput[]
    connectOrCreate?: UserTechnologyCreateOrConnectWithoutTechnologyInput | UserTechnologyCreateOrConnectWithoutTechnologyInput[]
    upsert?: UserTechnologyUpsertWithWhereUniqueWithoutTechnologyInput | UserTechnologyUpsertWithWhereUniqueWithoutTechnologyInput[]
    createMany?: UserTechnologyCreateManyTechnologyInputEnvelope
    set?: UserTechnologyWhereUniqueInput | UserTechnologyWhereUniqueInput[]
    disconnect?: UserTechnologyWhereUniqueInput | UserTechnologyWhereUniqueInput[]
    delete?: UserTechnologyWhereUniqueInput | UserTechnologyWhereUniqueInput[]
    connect?: UserTechnologyWhereUniqueInput | UserTechnologyWhereUniqueInput[]
    update?: UserTechnologyUpdateWithWhereUniqueWithoutTechnologyInput | UserTechnologyUpdateWithWhereUniqueWithoutTechnologyInput[]
    updateMany?: UserTechnologyUpdateManyWithWhereWithoutTechnologyInput | UserTechnologyUpdateManyWithWhereWithoutTechnologyInput[]
    deleteMany?: UserTechnologyScalarWhereInput | UserTechnologyScalarWhereInput[]
  }

  export type ProjectTechnologyUncheckedUpdateManyWithoutTechnologyNestedInput = {
    create?: XOR<ProjectTechnologyCreateWithoutTechnologyInput, ProjectTechnologyUncheckedCreateWithoutTechnologyInput> | ProjectTechnologyCreateWithoutTechnologyInput[] | ProjectTechnologyUncheckedCreateWithoutTechnologyInput[]
    connectOrCreate?: ProjectTechnologyCreateOrConnectWithoutTechnologyInput | ProjectTechnologyCreateOrConnectWithoutTechnologyInput[]
    upsert?: ProjectTechnologyUpsertWithWhereUniqueWithoutTechnologyInput | ProjectTechnologyUpsertWithWhereUniqueWithoutTechnologyInput[]
    createMany?: ProjectTechnologyCreateManyTechnologyInputEnvelope
    set?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    disconnect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    delete?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    connect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    update?: ProjectTechnologyUpdateWithWhereUniqueWithoutTechnologyInput | ProjectTechnologyUpdateWithWhereUniqueWithoutTechnologyInput[]
    updateMany?: ProjectTechnologyUpdateManyWithWhereWithoutTechnologyInput | ProjectTechnologyUpdateManyWithWhereWithoutTechnologyInput[]
    deleteMany?: ProjectTechnologyScalarWhereInput | ProjectTechnologyScalarWhereInput[]
  }

  export type UserTechnologyUncheckedUpdateManyWithoutTechnologyNestedInput = {
    create?: XOR<UserTechnologyCreateWithoutTechnologyInput, UserTechnologyUncheckedCreateWithoutTechnologyInput> | UserTechnologyCreateWithoutTechnologyInput[] | UserTechnologyUncheckedCreateWithoutTechnologyInput[]
    connectOrCreate?: UserTechnologyCreateOrConnectWithoutTechnologyInput | UserTechnologyCreateOrConnectWithoutTechnologyInput[]
    upsert?: UserTechnologyUpsertWithWhereUniqueWithoutTechnologyInput | UserTechnologyUpsertWithWhereUniqueWithoutTechnologyInput[]
    createMany?: UserTechnologyCreateManyTechnologyInputEnvelope
    set?: UserTechnologyWhereUniqueInput | UserTechnologyWhereUniqueInput[]
    disconnect?: UserTechnologyWhereUniqueInput | UserTechnologyWhereUniqueInput[]
    delete?: UserTechnologyWhereUniqueInput | UserTechnologyWhereUniqueInput[]
    connect?: UserTechnologyWhereUniqueInput | UserTechnologyWhereUniqueInput[]
    update?: UserTechnologyUpdateWithWhereUniqueWithoutTechnologyInput | UserTechnologyUpdateWithWhereUniqueWithoutTechnologyInput[]
    updateMany?: UserTechnologyUpdateManyWithWhereWithoutTechnologyInput | UserTechnologyUpdateManyWithWhereWithoutTechnologyInput[]
    deleteMany?: UserTechnologyScalarWhereInput | UserTechnologyScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutProjectDetailInput = {
    create?: XOR<ProjectCreateWithoutProjectDetailInput, ProjectUncheckedCreateWithoutProjectDetailInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectDetailInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutProjectDetailNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectDetailInput, ProjectUncheckedCreateWithoutProjectDetailInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectDetailInput
    upsert?: ProjectUpsertWithoutProjectDetailInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProjectDetailInput, ProjectUpdateWithoutProjectDetailInput>, ProjectUncheckedUpdateWithoutProjectDetailInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumCategoryProjectFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryProject | EnumCategoryProjectFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryProject[] | ListEnumCategoryProjectFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryProject[] | ListEnumCategoryProjectFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryProjectFilter<$PrismaModel> | $Enums.CategoryProject
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCategoryProjectWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryProject | EnumCategoryProjectFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryProject[] | ListEnumCategoryProjectFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryProject[] | ListEnumCategoryProjectFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryProjectWithAggregatesFilter<$PrismaModel> | $Enums.CategoryProject
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryProjectFilter<$PrismaModel>
    _max?: NestedEnumCategoryProjectFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTechCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TechCategory | EnumTechCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TechCategory[] | ListEnumTechCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechCategory[] | ListEnumTechCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTechCategoryFilter<$PrismaModel> | $Enums.TechCategory
  }

  export type NestedEnumTechCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TechCategory | EnumTechCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TechCategory[] | ListEnumTechCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechCategory[] | ListEnumTechCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTechCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TechCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTechCategoryFilter<$PrismaModel>
    _max?: NestedEnumTechCategoryFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProjectCreateWithoutUserInput = {
    id?: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: $Enums.CategoryProject
    featured?: boolean
    githubUrl?: string | null
    liveUrl?: string | null
    title: string
    projectDetail?: ProjectDetailCreateNestedManyWithoutProjectInput
    technologies?: ProjectTechnologyCreateNestedManyWithoutProjectInput
    thumbnail?: ProjectThumbnailCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: $Enums.CategoryProject
    featured?: boolean
    githubUrl?: string | null
    liveUrl?: string | null
    title: string
    projectDetail?: ProjectDetailUncheckedCreateNestedManyWithoutProjectInput
    technologies?: ProjectTechnologyUncheckedCreateNestedManyWithoutProjectInput
    thumbnail?: ProjectThumbnailUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserTechnologyCreateWithoutUserInput = {
    id?: string
    technology: TechnologyCreateNestedOneWithoutUsersInput
  }

  export type UserTechnologyUncheckedCreateWithoutUserInput = {
    id?: string
    technologyId: string
  }

  export type UserTechnologyCreateOrConnectWithoutUserInput = {
    where: UserTechnologyWhereUniqueInput
    create: XOR<UserTechnologyCreateWithoutUserInput, UserTechnologyUncheckedCreateWithoutUserInput>
  }

  export type UserTechnologyCreateManyUserInputEnvelope = {
    data: UserTechnologyCreateManyUserInput | UserTechnologyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    startDate?: DateTimeFilter<"Project"> | Date | string
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    category?: EnumCategoryProjectFilter<"Project"> | $Enums.CategoryProject
    featured?: BoolFilter<"Project"> | boolean
    githubUrl?: StringNullableFilter<"Project"> | string | null
    liveUrl?: StringNullableFilter<"Project"> | string | null
    title?: StringFilter<"Project"> | string
  }

  export type UserTechnologyUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTechnologyWhereUniqueInput
    update: XOR<UserTechnologyUpdateWithoutUserInput, UserTechnologyUncheckedUpdateWithoutUserInput>
    create: XOR<UserTechnologyCreateWithoutUserInput, UserTechnologyUncheckedCreateWithoutUserInput>
  }

  export type UserTechnologyUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTechnologyWhereUniqueInput
    data: XOR<UserTechnologyUpdateWithoutUserInput, UserTechnologyUncheckedUpdateWithoutUserInput>
  }

  export type UserTechnologyUpdateManyWithWhereWithoutUserInput = {
    where: UserTechnologyScalarWhereInput
    data: XOR<UserTechnologyUpdateManyMutationInput, UserTechnologyUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTechnologyScalarWhereInput = {
    AND?: UserTechnologyScalarWhereInput | UserTechnologyScalarWhereInput[]
    OR?: UserTechnologyScalarWhereInput[]
    NOT?: UserTechnologyScalarWhereInput | UserTechnologyScalarWhereInput[]
    id?: StringFilter<"UserTechnology"> | string
    userId?: StringFilter<"UserTechnology"> | string
    technologyId?: StringFilter<"UserTechnology"> | string
  }

  export type TechnologyCreateWithoutUsersInput = {
    id?: string
    name: string
    iconUrl: string
    category: $Enums.TechCategory
    projects?: ProjectTechnologyCreateNestedManyWithoutTechnologyInput
  }

  export type TechnologyUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    iconUrl: string
    category: $Enums.TechCategory
    projects?: ProjectTechnologyUncheckedCreateNestedManyWithoutTechnologyInput
  }

  export type TechnologyCreateOrConnectWithoutUsersInput = {
    where: TechnologyWhereUniqueInput
    create: XOR<TechnologyCreateWithoutUsersInput, TechnologyUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutUserTechnologiesInput = {
    id?: string
    name: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    description?: string | null
    email?: string | null
    github?: string | null
    linkedin?: string | null
    phoneNumber?: string | null
    photoId?: string | null
    photoUrl?: string | null
    website?: string | null
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserTechnologiesInput = {
    id?: string
    name: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    description?: string | null
    email?: string | null
    github?: string | null
    linkedin?: string | null
    phoneNumber?: string | null
    photoId?: string | null
    photoUrl?: string | null
    website?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserTechnologiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserTechnologiesInput, UserUncheckedCreateWithoutUserTechnologiesInput>
  }

  export type TechnologyUpsertWithoutUsersInput = {
    update: XOR<TechnologyUpdateWithoutUsersInput, TechnologyUncheckedUpdateWithoutUsersInput>
    create: XOR<TechnologyCreateWithoutUsersInput, TechnologyUncheckedCreateWithoutUsersInput>
    where?: TechnologyWhereInput
  }

  export type TechnologyUpdateToOneWithWhereWithoutUsersInput = {
    where?: TechnologyWhereInput
    data: XOR<TechnologyUpdateWithoutUsersInput, TechnologyUncheckedUpdateWithoutUsersInput>
  }

  export type TechnologyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconUrl?: StringFieldUpdateOperationsInput | string
    category?: EnumTechCategoryFieldUpdateOperationsInput | $Enums.TechCategory
    projects?: ProjectTechnologyUpdateManyWithoutTechnologyNestedInput
  }

  export type TechnologyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconUrl?: StringFieldUpdateOperationsInput | string
    category?: EnumTechCategoryFieldUpdateOperationsInput | $Enums.TechCategory
    projects?: ProjectTechnologyUncheckedUpdateManyWithoutTechnologyNestedInput
  }

  export type UserUpsertWithoutUserTechnologiesInput = {
    update: XOR<UserUpdateWithoutUserTechnologiesInput, UserUncheckedUpdateWithoutUserTechnologiesInput>
    create: XOR<UserCreateWithoutUserTechnologiesInput, UserUncheckedCreateWithoutUserTechnologiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserTechnologiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserTechnologiesInput, UserUncheckedUpdateWithoutUserTechnologiesInput>
  }

  export type UserUpdateWithoutUserTechnologiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoId?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserTechnologiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoId?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    name: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    description?: string | null
    email?: string | null
    github?: string | null
    linkedin?: string | null
    phoneNumber?: string | null
    photoId?: string | null
    photoUrl?: string | null
    website?: string | null
    userTechnologies?: UserTechnologyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    description?: string | null
    email?: string | null
    github?: string | null
    linkedin?: string | null
    phoneNumber?: string | null
    photoId?: string | null
    photoUrl?: string | null
    website?: string | null
    userTechnologies?: UserTechnologyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectDetailCreateWithoutProjectInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectDetailUncheckedCreateWithoutProjectInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectDetailCreateOrConnectWithoutProjectInput = {
    where: ProjectDetailWhereUniqueInput
    create: XOR<ProjectDetailCreateWithoutProjectInput, ProjectDetailUncheckedCreateWithoutProjectInput>
  }

  export type ProjectDetailCreateManyProjectInputEnvelope = {
    data: ProjectDetailCreateManyProjectInput | ProjectDetailCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectTechnologyCreateWithoutProjectInput = {
    id?: string
    technology: TechnologyCreateNestedOneWithoutProjectsInput
  }

  export type ProjectTechnologyUncheckedCreateWithoutProjectInput = {
    id?: string
    technologyId: string
  }

  export type ProjectTechnologyCreateOrConnectWithoutProjectInput = {
    where: ProjectTechnologyWhereUniqueInput
    create: XOR<ProjectTechnologyCreateWithoutProjectInput, ProjectTechnologyUncheckedCreateWithoutProjectInput>
  }

  export type ProjectTechnologyCreateManyProjectInputEnvelope = {
    data: ProjectTechnologyCreateManyProjectInput | ProjectTechnologyCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectThumbnailCreateWithoutProjectInput = {
    id?: string
    url: string
    publicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectThumbnailUncheckedCreateWithoutProjectInput = {
    id?: string
    url: string
    publicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectThumbnailCreateOrConnectWithoutProjectInput = {
    where: ProjectThumbnailWhereUniqueInput
    create: XOR<ProjectThumbnailCreateWithoutProjectInput, ProjectThumbnailUncheckedCreateWithoutProjectInput>
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoId?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userTechnologies?: UserTechnologyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoId?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    userTechnologies?: UserTechnologyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectDetailUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectDetailWhereUniqueInput
    update: XOR<ProjectDetailUpdateWithoutProjectInput, ProjectDetailUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectDetailCreateWithoutProjectInput, ProjectDetailUncheckedCreateWithoutProjectInput>
  }

  export type ProjectDetailUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectDetailWhereUniqueInput
    data: XOR<ProjectDetailUpdateWithoutProjectInput, ProjectDetailUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectDetailUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectDetailScalarWhereInput
    data: XOR<ProjectDetailUpdateManyMutationInput, ProjectDetailUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectDetailScalarWhereInput = {
    AND?: ProjectDetailScalarWhereInput | ProjectDetailScalarWhereInput[]
    OR?: ProjectDetailScalarWhereInput[]
    NOT?: ProjectDetailScalarWhereInput | ProjectDetailScalarWhereInput[]
    id?: StringFilter<"ProjectDetail"> | string
    projectId?: StringFilter<"ProjectDetail"> | string
    content?: JsonFilter<"ProjectDetail">
    createdAt?: DateTimeFilter<"ProjectDetail"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectDetail"> | Date | string
  }

  export type ProjectTechnologyUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectTechnologyWhereUniqueInput
    update: XOR<ProjectTechnologyUpdateWithoutProjectInput, ProjectTechnologyUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectTechnologyCreateWithoutProjectInput, ProjectTechnologyUncheckedCreateWithoutProjectInput>
  }

  export type ProjectTechnologyUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectTechnologyWhereUniqueInput
    data: XOR<ProjectTechnologyUpdateWithoutProjectInput, ProjectTechnologyUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectTechnologyUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectTechnologyScalarWhereInput
    data: XOR<ProjectTechnologyUpdateManyMutationInput, ProjectTechnologyUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectTechnologyScalarWhereInput = {
    AND?: ProjectTechnologyScalarWhereInput | ProjectTechnologyScalarWhereInput[]
    OR?: ProjectTechnologyScalarWhereInput[]
    NOT?: ProjectTechnologyScalarWhereInput | ProjectTechnologyScalarWhereInput[]
    id?: StringFilter<"ProjectTechnology"> | string
    projectId?: StringFilter<"ProjectTechnology"> | string
    technologyId?: StringFilter<"ProjectTechnology"> | string
  }

  export type ProjectThumbnailUpsertWithoutProjectInput = {
    update: XOR<ProjectThumbnailUpdateWithoutProjectInput, ProjectThumbnailUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectThumbnailCreateWithoutProjectInput, ProjectThumbnailUncheckedCreateWithoutProjectInput>
    where?: ProjectThumbnailWhereInput
  }

  export type ProjectThumbnailUpdateToOneWithWhereWithoutProjectInput = {
    where?: ProjectThumbnailWhereInput
    data: XOR<ProjectThumbnailUpdateWithoutProjectInput, ProjectThumbnailUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectThumbnailUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectThumbnailUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateWithoutThumbnailInput = {
    id?: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: $Enums.CategoryProject
    featured?: boolean
    githubUrl?: string | null
    liveUrl?: string | null
    title: string
    user: UserCreateNestedOneWithoutProjectsInput
    projectDetail?: ProjectDetailCreateNestedManyWithoutProjectInput
    technologies?: ProjectTechnologyCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutThumbnailInput = {
    id?: string
    userId: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: $Enums.CategoryProject
    featured?: boolean
    githubUrl?: string | null
    liveUrl?: string | null
    title: string
    projectDetail?: ProjectDetailUncheckedCreateNestedManyWithoutProjectInput
    technologies?: ProjectTechnologyUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutThumbnailInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutThumbnailInput, ProjectUncheckedCreateWithoutThumbnailInput>
  }

  export type ProjectUpsertWithoutThumbnailInput = {
    update: XOR<ProjectUpdateWithoutThumbnailInput, ProjectUncheckedUpdateWithoutThumbnailInput>
    create: XOR<ProjectCreateWithoutThumbnailInput, ProjectUncheckedCreateWithoutThumbnailInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutThumbnailInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutThumbnailInput, ProjectUncheckedUpdateWithoutThumbnailInput>
  }

  export type ProjectUpdateWithoutThumbnailInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryProjectFieldUpdateOperationsInput | $Enums.CategoryProject
    featured?: BoolFieldUpdateOperationsInput | boolean
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    projectDetail?: ProjectDetailUpdateManyWithoutProjectNestedInput
    technologies?: ProjectTechnologyUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutThumbnailInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryProjectFieldUpdateOperationsInput | $Enums.CategoryProject
    featured?: BoolFieldUpdateOperationsInput | boolean
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    projectDetail?: ProjectDetailUncheckedUpdateManyWithoutProjectNestedInput
    technologies?: ProjectTechnologyUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutTechnologiesInput = {
    id?: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: $Enums.CategoryProject
    featured?: boolean
    githubUrl?: string | null
    liveUrl?: string | null
    title: string
    user: UserCreateNestedOneWithoutProjectsInput
    projectDetail?: ProjectDetailCreateNestedManyWithoutProjectInput
    thumbnail?: ProjectThumbnailCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTechnologiesInput = {
    id?: string
    userId: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: $Enums.CategoryProject
    featured?: boolean
    githubUrl?: string | null
    liveUrl?: string | null
    title: string
    projectDetail?: ProjectDetailUncheckedCreateNestedManyWithoutProjectInput
    thumbnail?: ProjectThumbnailUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTechnologiesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTechnologiesInput, ProjectUncheckedCreateWithoutTechnologiesInput>
  }

  export type TechnologyCreateWithoutProjectsInput = {
    id?: string
    name: string
    iconUrl: string
    category: $Enums.TechCategory
    users?: UserTechnologyCreateNestedManyWithoutTechnologyInput
  }

  export type TechnologyUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    iconUrl: string
    category: $Enums.TechCategory
    users?: UserTechnologyUncheckedCreateNestedManyWithoutTechnologyInput
  }

  export type TechnologyCreateOrConnectWithoutProjectsInput = {
    where: TechnologyWhereUniqueInput
    create: XOR<TechnologyCreateWithoutProjectsInput, TechnologyUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectUpsertWithoutTechnologiesInput = {
    update: XOR<ProjectUpdateWithoutTechnologiesInput, ProjectUncheckedUpdateWithoutTechnologiesInput>
    create: XOR<ProjectCreateWithoutTechnologiesInput, ProjectUncheckedCreateWithoutTechnologiesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTechnologiesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTechnologiesInput, ProjectUncheckedUpdateWithoutTechnologiesInput>
  }

  export type ProjectUpdateWithoutTechnologiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryProjectFieldUpdateOperationsInput | $Enums.CategoryProject
    featured?: BoolFieldUpdateOperationsInput | boolean
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    projectDetail?: ProjectDetailUpdateManyWithoutProjectNestedInput
    thumbnail?: ProjectThumbnailUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTechnologiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryProjectFieldUpdateOperationsInput | $Enums.CategoryProject
    featured?: BoolFieldUpdateOperationsInput | boolean
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    projectDetail?: ProjectDetailUncheckedUpdateManyWithoutProjectNestedInput
    thumbnail?: ProjectThumbnailUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type TechnologyUpsertWithoutProjectsInput = {
    update: XOR<TechnologyUpdateWithoutProjectsInput, TechnologyUncheckedUpdateWithoutProjectsInput>
    create: XOR<TechnologyCreateWithoutProjectsInput, TechnologyUncheckedCreateWithoutProjectsInput>
    where?: TechnologyWhereInput
  }

  export type TechnologyUpdateToOneWithWhereWithoutProjectsInput = {
    where?: TechnologyWhereInput
    data: XOR<TechnologyUpdateWithoutProjectsInput, TechnologyUncheckedUpdateWithoutProjectsInput>
  }

  export type TechnologyUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconUrl?: StringFieldUpdateOperationsInput | string
    category?: EnumTechCategoryFieldUpdateOperationsInput | $Enums.TechCategory
    users?: UserTechnologyUpdateManyWithoutTechnologyNestedInput
  }

  export type TechnologyUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconUrl?: StringFieldUpdateOperationsInput | string
    category?: EnumTechCategoryFieldUpdateOperationsInput | $Enums.TechCategory
    users?: UserTechnologyUncheckedUpdateManyWithoutTechnologyNestedInput
  }

  export type ProjectTechnologyCreateWithoutTechnologyInput = {
    id?: string
    project: ProjectCreateNestedOneWithoutTechnologiesInput
  }

  export type ProjectTechnologyUncheckedCreateWithoutTechnologyInput = {
    id?: string
    projectId: string
  }

  export type ProjectTechnologyCreateOrConnectWithoutTechnologyInput = {
    where: ProjectTechnologyWhereUniqueInput
    create: XOR<ProjectTechnologyCreateWithoutTechnologyInput, ProjectTechnologyUncheckedCreateWithoutTechnologyInput>
  }

  export type ProjectTechnologyCreateManyTechnologyInputEnvelope = {
    data: ProjectTechnologyCreateManyTechnologyInput | ProjectTechnologyCreateManyTechnologyInput[]
    skipDuplicates?: boolean
  }

  export type UserTechnologyCreateWithoutTechnologyInput = {
    id?: string
    user: UserCreateNestedOneWithoutUserTechnologiesInput
  }

  export type UserTechnologyUncheckedCreateWithoutTechnologyInput = {
    id?: string
    userId: string
  }

  export type UserTechnologyCreateOrConnectWithoutTechnologyInput = {
    where: UserTechnologyWhereUniqueInput
    create: XOR<UserTechnologyCreateWithoutTechnologyInput, UserTechnologyUncheckedCreateWithoutTechnologyInput>
  }

  export type UserTechnologyCreateManyTechnologyInputEnvelope = {
    data: UserTechnologyCreateManyTechnologyInput | UserTechnologyCreateManyTechnologyInput[]
    skipDuplicates?: boolean
  }

  export type ProjectTechnologyUpsertWithWhereUniqueWithoutTechnologyInput = {
    where: ProjectTechnologyWhereUniqueInput
    update: XOR<ProjectTechnologyUpdateWithoutTechnologyInput, ProjectTechnologyUncheckedUpdateWithoutTechnologyInput>
    create: XOR<ProjectTechnologyCreateWithoutTechnologyInput, ProjectTechnologyUncheckedCreateWithoutTechnologyInput>
  }

  export type ProjectTechnologyUpdateWithWhereUniqueWithoutTechnologyInput = {
    where: ProjectTechnologyWhereUniqueInput
    data: XOR<ProjectTechnologyUpdateWithoutTechnologyInput, ProjectTechnologyUncheckedUpdateWithoutTechnologyInput>
  }

  export type ProjectTechnologyUpdateManyWithWhereWithoutTechnologyInput = {
    where: ProjectTechnologyScalarWhereInput
    data: XOR<ProjectTechnologyUpdateManyMutationInput, ProjectTechnologyUncheckedUpdateManyWithoutTechnologyInput>
  }

  export type UserTechnologyUpsertWithWhereUniqueWithoutTechnologyInput = {
    where: UserTechnologyWhereUniqueInput
    update: XOR<UserTechnologyUpdateWithoutTechnologyInput, UserTechnologyUncheckedUpdateWithoutTechnologyInput>
    create: XOR<UserTechnologyCreateWithoutTechnologyInput, UserTechnologyUncheckedCreateWithoutTechnologyInput>
  }

  export type UserTechnologyUpdateWithWhereUniqueWithoutTechnologyInput = {
    where: UserTechnologyWhereUniqueInput
    data: XOR<UserTechnologyUpdateWithoutTechnologyInput, UserTechnologyUncheckedUpdateWithoutTechnologyInput>
  }

  export type UserTechnologyUpdateManyWithWhereWithoutTechnologyInput = {
    where: UserTechnologyScalarWhereInput
    data: XOR<UserTechnologyUpdateManyMutationInput, UserTechnologyUncheckedUpdateManyWithoutTechnologyInput>
  }

  export type ProjectCreateWithoutProjectDetailInput = {
    id?: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: $Enums.CategoryProject
    featured?: boolean
    githubUrl?: string | null
    liveUrl?: string | null
    title: string
    user: UserCreateNestedOneWithoutProjectsInput
    technologies?: ProjectTechnologyCreateNestedManyWithoutProjectInput
    thumbnail?: ProjectThumbnailCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProjectDetailInput = {
    id?: string
    userId: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: $Enums.CategoryProject
    featured?: boolean
    githubUrl?: string | null
    liveUrl?: string | null
    title: string
    technologies?: ProjectTechnologyUncheckedCreateNestedManyWithoutProjectInput
    thumbnail?: ProjectThumbnailUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProjectDetailInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectDetailInput, ProjectUncheckedCreateWithoutProjectDetailInput>
  }

  export type ProjectUpsertWithoutProjectDetailInput = {
    update: XOR<ProjectUpdateWithoutProjectDetailInput, ProjectUncheckedUpdateWithoutProjectDetailInput>
    create: XOR<ProjectCreateWithoutProjectDetailInput, ProjectUncheckedCreateWithoutProjectDetailInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProjectDetailInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProjectDetailInput, ProjectUncheckedUpdateWithoutProjectDetailInput>
  }

  export type ProjectUpdateWithoutProjectDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryProjectFieldUpdateOperationsInput | $Enums.CategoryProject
    featured?: BoolFieldUpdateOperationsInput | boolean
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    technologies?: ProjectTechnologyUpdateManyWithoutProjectNestedInput
    thumbnail?: ProjectThumbnailUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryProjectFieldUpdateOperationsInput | $Enums.CategoryProject
    featured?: BoolFieldUpdateOperationsInput | boolean
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    technologies?: ProjectTechnologyUncheckedUpdateManyWithoutProjectNestedInput
    thumbnail?: ProjectThumbnailUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: $Enums.CategoryProject
    featured?: boolean
    githubUrl?: string | null
    liveUrl?: string | null
    title: string
  }

  export type UserTechnologyCreateManyUserInput = {
    id?: string
    technologyId: string
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryProjectFieldUpdateOperationsInput | $Enums.CategoryProject
    featured?: BoolFieldUpdateOperationsInput | boolean
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    projectDetail?: ProjectDetailUpdateManyWithoutProjectNestedInput
    technologies?: ProjectTechnologyUpdateManyWithoutProjectNestedInput
    thumbnail?: ProjectThumbnailUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryProjectFieldUpdateOperationsInput | $Enums.CategoryProject
    featured?: BoolFieldUpdateOperationsInput | boolean
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    projectDetail?: ProjectDetailUncheckedUpdateManyWithoutProjectNestedInput
    technologies?: ProjectTechnologyUncheckedUpdateManyWithoutProjectNestedInput
    thumbnail?: ProjectThumbnailUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryProjectFieldUpdateOperationsInput | $Enums.CategoryProject
    featured?: BoolFieldUpdateOperationsInput | boolean
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
  }

  export type UserTechnologyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    technology?: TechnologyUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserTechnologyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    technologyId?: StringFieldUpdateOperationsInput | string
  }

  export type UserTechnologyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    technologyId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectDetailCreateManyProjectInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectTechnologyCreateManyProjectInput = {
    id?: string
    technologyId: string
  }

  export type ProjectDetailUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDetailUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDetailUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTechnologyUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    technology?: TechnologyUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectTechnologyUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    technologyId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTechnologyUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    technologyId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTechnologyCreateManyTechnologyInput = {
    id?: string
    projectId: string
  }

  export type UserTechnologyCreateManyTechnologyInput = {
    id?: string
    userId: string
  }

  export type ProjectTechnologyUpdateWithoutTechnologyInput = {
    id?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutTechnologiesNestedInput
  }

  export type ProjectTechnologyUncheckedUpdateWithoutTechnologyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTechnologyUncheckedUpdateManyWithoutTechnologyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type UserTechnologyUpdateWithoutTechnologyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserTechnologiesNestedInput
  }

  export type UserTechnologyUncheckedUpdateWithoutTechnologyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserTechnologyUncheckedUpdateManyWithoutTechnologyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}