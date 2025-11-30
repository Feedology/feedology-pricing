
/**
 * App Plan Types
 * Available subscription plans for shops
 */
export const SHOP_APP_PLANS = {
    FREE: 'free',
    BASIC: 'basic',
    PRO: 'pro',
} as const;

export type AppPlan = typeof SHOP_APP_PLANS[keyof typeof SHOP_APP_PLANS];

/**
 * Synchronization Frequency
 */
export const SYNC_FREQUENCY = {
    HOURLY: 'hourly',
    DAILY: 'daily',
    WEEKLY: 'weekly',
} as const;

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
export const APP_PLANS = {
    [SHOP_APP_PLANS.FREE]: {
        count_feeds: 1,
        count_variants: 50,
        sync_frequency: [SYNC_FREQUENCY.DAILY, SYNC_FREQUENCY.WEEKLY],
        instant_sync: false,
        has_product_level_mapping: false,
        has_integrate_product_reviews: false,
    },
    [SHOP_APP_PLANS.BASIC]: {
        count_feeds: 5,
        count_variants: 500,
        sync_frequency: [SYNC_FREQUENCY.HOURLY, SYNC_FREQUENCY.DAILY, SYNC_FREQUENCY.WEEKLY],
        instant_sync: true,
        has_product_level_mapping: true,
        has_integrate_product_reviews: true,
    },
    [SHOP_APP_PLANS.PRO]: {
        count_feeds: 20,
        count_variants: 1000,
        sync_frequency: [SYNC_FREQUENCY.HOURLY, SYNC_FREQUENCY.DAILY, SYNC_FREQUENCY.WEEKLY],
        instant_sync: true,
        has_product_level_mapping: true,
        has_integrate_product_reviews: true,
    },
} as const;

/**
 * Get the count of feeds for a given app plan
 * @param appPlan - The app plan
 * @returns The count of feeds
 */
export function getAppPlanCountFeeds(appPlan: AppPlan | undefined): number {
    if (!appPlan) {
        return APP_PLANS[SHOP_APP_PLANS.FREE].count_feeds;
    }
    return APP_PLANS[appPlan].count_feeds ?? 0;
}

/**
 * Get the maximum number of variants for a given app plan
 * @param appPlan - The app plan
 * @returns The maximum number of variants
 */
export function getAppPlanMaxVariants(appPlan: AppPlan | undefined | null): number {
    if (!appPlan) {
        return APP_PLANS[SHOP_APP_PLANS.FREE].count_variants;
    }
    return APP_PLANS[appPlan].count_variants ?? 0;
}

/**
 * Get the instant sync feature for a given app plan
 * @param appPlan - The app plan
 * @returns The instant sync feature
 */
export function getAppPlanInstantSync(appPlan: AppPlan | undefined | null): boolean {
    if (!appPlan) {
        return APP_PLANS[SHOP_APP_PLANS.FREE].instant_sync;
    }
    return APP_PLANS[appPlan].instant_sync ?? false;
}

/**
 * Get the synchronization frequency for a given app plan
 * @param appPlan - The app plan
 * @returns The synchronization frequency
 */
export function getAppPlanSyncFrequency(appPlan: AppPlan | undefined | null): SyncFrequency[] {
    if (!appPlan) {
        return Array.from(APP_PLANS[SHOP_APP_PLANS.FREE].sync_frequency);
    }
    return Array.from(APP_PLANS[appPlan].sync_frequency ?? []);
}

/**
 * Get the product level mapping feature for a given app plan
 * @param appPlan - The app plan
 * @returns The product level mapping feature
 */
export function getAppPlanProductLevelMapping(appPlan: AppPlan | undefined | null): boolean {
    if (!appPlan) {
        return APP_PLANS[SHOP_APP_PLANS.FREE].has_product_level_mapping;
    }
    return APP_PLANS[appPlan].has_product_level_mapping ?? false;
}

/**
 * Get the integrate product reviews feature for a given app plan
 * @param appPlan - The app plan
 * @returns The integrate product reviews feature
 */
export function getAppPlanIntegrateProductReviews(appPlan: AppPlan | undefined | null): boolean {
    if (!appPlan) {
        return APP_PLANS[SHOP_APP_PLANS.FREE].has_integrate_product_reviews;
    }
    return APP_PLANS[appPlan].has_integrate_product_reviews ?? false;
}

