/**
 * App Plan Types
 * Available subscription plans for shops
 */
export declare const SHOP_APP_PLANS: {
    readonly FREE: "free";
    readonly BASIC: "basic";
    readonly PRO: "pro";
};
export type AppPlan = typeof SHOP_APP_PLANS[keyof typeof SHOP_APP_PLANS];
/**
 * Synchronization Frequency
 */
export declare const SYNC_FREQUENCY: {
    readonly HOURLY: "hourly";
    readonly DAILY: "daily";
    readonly WEEKLY: "weekly";
};
export type SyncFrequency = typeof SYNC_FREQUENCY[keyof typeof SYNC_FREQUENCY];
/**
 * App plans and their features
 *
 * - count_feeds: The maximum number of feeds is active
 * - count_variants: The maximum number of variants
 * - instant_sync: Whether the app has instant sync feature (push to channel when the webhook product is updated/deleted)
 * - sync_frequency: The synchronization frequency
 * - has_product_level_mapping: Whether the app has product level mapping
 * - has_integrate_product_reviews: Whether the app has integrate product reviews
 */
export declare const APP_PLANS: {
    readonly free: {
        readonly count_feeds: 1;
        readonly count_variants: 50;
        readonly sync_frequency: readonly ["daily", "weekly"];
        readonly instant_sync: false;
        readonly has_product_level_mapping: false;
        readonly has_integrate_product_reviews: false;
    };
    readonly basic: {
        readonly count_feeds: 5;
        readonly count_variants: 500;
        readonly sync_frequency: readonly ["hourly", "daily", "weekly"];
        readonly instant_sync: true;
        readonly has_product_level_mapping: true;
        readonly has_integrate_product_reviews: true;
    };
    readonly pro: {
        readonly count_feeds: 20;
        readonly count_variants: 1000;
        readonly sync_frequency: readonly ["hourly", "daily", "weekly"];
        readonly instant_sync: true;
        readonly has_product_level_mapping: true;
        readonly has_integrate_product_reviews: true;
    };
};
/**
 * Get the count of feeds for a given app plan
 * @param appPlan - The app plan
 * @returns The count of feeds
 */
export declare function getAppPlanCountFeeds(appPlan: AppPlan | undefined): number;
/**
 * Get the maximum number of variants for a given app plan
 * @param appPlan - The app plan
 * @returns The maximum number of variants
 */
export declare function getAppPlanMaxVariants(appPlan: AppPlan | undefined | null): number;
/**
 * Get the instant sync feature for a given app plan
 * @param appPlan - The app plan
 * @returns The instant sync feature
 */
export declare function getAppPlanInstantSync(appPlan: AppPlan | undefined | null): boolean;
/**
 * Get the synchronization frequency for a given app plan
 * @param appPlan - The app plan
 * @returns The synchronization frequency
 */
export declare function getAppPlanSyncFrequency(appPlan: AppPlan | undefined | null): SyncFrequency[];
/**
 * Get the product level mapping feature for a given app plan
 * @param appPlan - The app plan
 * @returns The product level mapping feature
 */
export declare function getAppPlanProductLevelMapping(appPlan: AppPlan | undefined | null): boolean;
/**
 * Get the integrate product reviews feature for a given app plan
 * @param appPlan - The app plan
 * @returns The integrate product reviews feature
 */
export declare function getAppPlanIntegrateProductReviews(appPlan: AppPlan | undefined | null): boolean;
//# sourceMappingURL=app-plans.d.ts.map