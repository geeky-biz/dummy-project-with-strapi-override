import { type NormalizeRelationArgs } from './normalizeRelations';
import type { Contracts } from '@strapi/plugin-content-manager/_internal/shared';
import type { UseInfiniteQueryResult } from 'react-query';
export declare const normalizeSearchResults: (relations: UseInfiniteQueryResult<Contracts.Relations.FindAvailable.Response | null, unknown>, { mainFieldName }: Pick<NormalizeRelationArgs, 'mainFieldName'>) => {
    data: import("./normalizeRelations").NormalizedRelation[];
    error: null;
    isError: false;
    isIdle: true;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    status: "idle";
    fetchNextPage: (options?: import("react-query").FetchNextPageOptions | undefined) => Promise<import("react-query").InfiniteQueryObserverResult<Contracts.Relations.FindAvailable.Response | null, unknown>>;
    fetchPreviousPage: (options?: import("react-query").FetchPreviousPageOptions | undefined) => Promise<import("react-query").InfiniteQueryObserverResult<Contracts.Relations.FindAvailable.Response | null, unknown>>;
    hasNextPage?: boolean | undefined;
    hasPreviousPage?: boolean | undefined;
    isFetchingNextPage: boolean;
    isFetchingPreviousPage: boolean;
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<import("react-query").InfiniteData<Contracts.Relations.FindAvailable.Response | null>, unknown>>;
    remove: () => void;
} | {
    data: import("./normalizeRelations").NormalizedRelation[];
    error: unknown;
    isError: true;
    isIdle: false;
    isLoading: false;
    isLoadingError: true;
    isRefetchError: false;
    isSuccess: false;
    status: "error";
    fetchNextPage: (options?: import("react-query").FetchNextPageOptions | undefined) => Promise<import("react-query").InfiniteQueryObserverResult<Contracts.Relations.FindAvailable.Response | null, unknown>>;
    fetchPreviousPage: (options?: import("react-query").FetchPreviousPageOptions | undefined) => Promise<import("react-query").InfiniteQueryObserverResult<Contracts.Relations.FindAvailable.Response | null, unknown>>;
    hasNextPage?: boolean | undefined;
    hasPreviousPage?: boolean | undefined;
    isFetchingNextPage: boolean;
    isFetchingPreviousPage: boolean;
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<import("react-query").InfiniteData<Contracts.Relations.FindAvailable.Response | null>, unknown>>;
    remove: () => void;
} | {
    data: import("./normalizeRelations").NormalizedRelation[];
    error: null;
    isError: false;
    isIdle: false;
    isLoading: true;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    status: "loading";
    fetchNextPage: (options?: import("react-query").FetchNextPageOptions | undefined) => Promise<import("react-query").InfiniteQueryObserverResult<Contracts.Relations.FindAvailable.Response | null, unknown>>;
    fetchPreviousPage: (options?: import("react-query").FetchPreviousPageOptions | undefined) => Promise<import("react-query").InfiniteQueryObserverResult<Contracts.Relations.FindAvailable.Response | null, unknown>>;
    hasNextPage?: boolean | undefined;
    hasPreviousPage?: boolean | undefined;
    isFetchingNextPage: boolean;
    isFetchingPreviousPage: boolean;
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<import("react-query").InfiniteData<Contracts.Relations.FindAvailable.Response | null>, unknown>>;
    remove: () => void;
} | {
    data: import("./normalizeRelations").NormalizedRelation[];
    error: unknown;
    isError: true;
    isIdle: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: true;
    isSuccess: false;
    status: "error";
    fetchNextPage: (options?: import("react-query").FetchNextPageOptions | undefined) => Promise<import("react-query").InfiniteQueryObserverResult<Contracts.Relations.FindAvailable.Response | null, unknown>>;
    fetchPreviousPage: (options?: import("react-query").FetchPreviousPageOptions | undefined) => Promise<import("react-query").InfiniteQueryObserverResult<Contracts.Relations.FindAvailable.Response | null, unknown>>;
    hasNextPage?: boolean | undefined;
    hasPreviousPage?: boolean | undefined;
    isFetchingNextPage: boolean;
    isFetchingPreviousPage: boolean;
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<import("react-query").InfiniteData<Contracts.Relations.FindAvailable.Response | null>, unknown>>;
    remove: () => void;
} | {
    data: import("./normalizeRelations").NormalizedRelation[];
    error: null;
    isError: false;
    isIdle: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: true;
    status: "success";
    fetchNextPage: (options?: import("react-query").FetchNextPageOptions | undefined) => Promise<import("react-query").InfiniteQueryObserverResult<Contracts.Relations.FindAvailable.Response | null, unknown>>;
    fetchPreviousPage: (options?: import("react-query").FetchPreviousPageOptions | undefined) => Promise<import("react-query").InfiniteQueryObserverResult<Contracts.Relations.FindAvailable.Response | null, unknown>>;
    hasNextPage?: boolean | undefined;
    hasPreviousPage?: boolean | undefined;
    isFetchingNextPage: boolean;
    isFetchingPreviousPage: boolean;
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<import("react-query").InfiniteData<Contracts.Relations.FindAvailable.Response | null>, unknown>>;
    remove: () => void;
};