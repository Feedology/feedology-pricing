
/**
 * App Plan Types
 * Available subscription plans for shops
 */
export const SHOP_APP_PLANS = {
    FREE: 'free',
    BASIC: 'basic',
    PRO: 'pro',
    CUSTOM: 'custom',
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
 * App Plan Configuration Interface
 */
export interface AppPlanConfig {
    /** Display name of the plan */
    name: string;
    /** Price of the plan */
    price: number;
    /** Whether the plan is recurring (subscription) */
    recurring: boolean;
    /** Maximum number of active feeds */
    count_feeds: number;
    /** Maximum number of variants */
    count_variants: number;
    /** Available synchronization frequencies */
    sync_frequency: readonly SyncFrequency[];
    /** Whether instant sync feature is available (push on webhook) */
    instant_sync: boolean;
    /** Whether product level mapping is available */
    has_product_level_mapping: boolean;
    /** Whether product reviews integration is available */
    has_integrate_product_reviews: boolean;
}

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
        name: 'Free',
        price: 0,
        recurring: false,
        count_feeds: 1,
        count_variants: 50,
        sync_frequency: [SYNC_FREQUENCY.DAILY, SYNC_FREQUENCY.WEEKLY],
        instant_sync: false,
        has_product_level_mapping: false,
        has_integrate_product_reviews: false,
    },
    [SHOP_APP_PLANS.BASIC]: {
        name: 'Basic',
        price: 9.9,
        recurring: true,
        count_feeds: 5,
        count_variants: 500,
        sync_frequency: [SYNC_FREQUENCY.HOURLY, SYNC_FREQUENCY.DAILY, SYNC_FREQUENCY.WEEKLY],
        instant_sync: true,
        has_product_level_mapping: true,
        has_integrate_product_reviews: true,
    },
    [SHOP_APP_PLANS.PRO]: {
        name: 'Pro',
        price: 29.9,
        recurring: true,
        count_feeds: 20,
        count_variants: 1000,
        sync_frequency: [SYNC_FREQUENCY.HOURLY, SYNC_FREQUENCY.DAILY, SYNC_FREQUENCY.WEEKLY],
        instant_sync: true,
        has_product_level_mapping: true,
        has_integrate_product_reviews: true,
    },
    [SHOP_APP_PLANS.CUSTOM]: {
        name: 'Custom',
        price: 0,
        recurring: true,
        count_feeds: 0,
        count_variants: 0,
        sync_frequency: [SYNC_FREQUENCY.HOURLY, SYNC_FREQUENCY.DAILY, SYNC_FREQUENCY.WEEKLY],
        instant_sync: true,
        has_product_level_mapping: true,
        has_integrate_product_reviews: true,
    },
} as const;

/**
 * Validate custom plan configuration
 * @throws Error if appPlan is 'custom' and customPlanConfig is undefined
 */
function assertCustomPlanConfig(appPlan: AppPlan, customPlanConfig: AppPlanConfig | undefined): asserts customPlanConfig is AppPlanConfig {
    if (appPlan === SHOP_APP_PLANS.CUSTOM && !customPlanConfig) {
        throw new Error('customPlanConfig is required when appPlan is "custom"');
    }
}

/**
 * Get the count of feeds for a given app plan
 * @param appPlan - The app plan
 * @param customPlanConfig - Custom plan configuration (required when appPlan is 'custom')
 * @returns The count of feeds
 */
export function getAppPlanCountFeeds(appPlan: typeof SHOP_APP_PLANS.CUSTOM, customPlanConfig: AppPlanConfig): number;
export function getAppPlanCountFeeds(appPlan: AppPlan | null): number;
export function getAppPlanCountFeeds(appPlan: AppPlan | null, customPlanConfig?: AppPlanConfig): number {
    const freePlan = APP_PLANS[SHOP_APP_PLANS.FREE];
    if (!appPlan) {
        return freePlan.count_feeds;
    }
    if (appPlan === SHOP_APP_PLANS.CUSTOM) {
        assertCustomPlanConfig(appPlan, customPlanConfig);
        return customPlanConfig.count_feeds;
    }
    return APP_PLANS[appPlan].count_feeds ?? freePlan.count_feeds;
}

/**
 * Get the maximum number of variants for a given app plan
 * @param appPlan - The app plan
 * @param customPlanConfig - Custom plan configuration (required when appPlan is 'custom')
 * @returns The maximum number of variants
 */
export function getAppPlanMaxVariants(appPlan: typeof SHOP_APP_PLANS.CUSTOM, customPlanConfig: AppPlanConfig): number;
export function getAppPlanMaxVariants(appPlan: AppPlan | null): number;
export function getAppPlanMaxVariants(appPlan: AppPlan | null, customPlanConfig?: AppPlanConfig): number {
    const freePlan = APP_PLANS[SHOP_APP_PLANS.FREE];
    if (!appPlan) {
        return freePlan.count_variants;
    }
    if (appPlan === SHOP_APP_PLANS.CUSTOM) {
        assertCustomPlanConfig(appPlan, customPlanConfig);
        return customPlanConfig.count_variants;
    }
    return APP_PLANS[appPlan].count_variants ?? freePlan.count_variants;
}

/**
 * Get the instant sync feature for a given app plan
 * @param appPlan - The app plan
 * @param customPlanConfig - Custom plan configuration (required when appPlan is 'custom')
 * @returns The instant sync feature
 */
export function getAppPlanInstantSync(appPlan: typeof SHOP_APP_PLANS.CUSTOM, customPlanConfig: AppPlanConfig): boolean;
export function getAppPlanInstantSync(appPlan: AppPlan | null): boolean;
export function getAppPlanInstantSync(appPlan: AppPlan | null, customPlanConfig?: AppPlanConfig): boolean {
    const freePlan = APP_PLANS[SHOP_APP_PLANS.FREE];
    if (!appPlan) {
        return freePlan.instant_sync;
    }
    if (appPlan === SHOP_APP_PLANS.CUSTOM) {
        assertCustomPlanConfig(appPlan, customPlanConfig);
        return customPlanConfig.instant_sync;
    }
    return APP_PLANS[appPlan].instant_sync;
}

/**
 * Get the synchronization frequency for a given app plan
 * @param appPlan - The app plan
 * @param customPlanConfig - Custom plan configuration (required when appPlan is 'custom')
 * @returns The synchronization frequency
 */
export function getAppPlanSyncFrequency(appPlan: typeof SHOP_APP_PLANS.CUSTOM, customPlanConfig: AppPlanConfig): SyncFrequency[];
export function getAppPlanSyncFrequency(appPlan: AppPlan | null): SyncFrequency[];
export function getAppPlanSyncFrequency(appPlan: AppPlan | null, customPlanConfig?: AppPlanConfig): SyncFrequency[] {
    const freePlan = APP_PLANS[SHOP_APP_PLANS.FREE];
    if (!appPlan) {
        return Array.from(freePlan.sync_frequency);
    }
    if (appPlan === SHOP_APP_PLANS.CUSTOM) {
        assertCustomPlanConfig(appPlan, customPlanConfig);
        return Array.from(customPlanConfig.sync_frequency);
    }
    return Array.from(APP_PLANS[appPlan].sync_frequency ?? freePlan.sync_frequency);
}

/**
 * Get the product level mapping feature for a given app plan
 * @param appPlan - The app plan
 * @param customPlanConfig - Custom plan configuration (required when appPlan is 'custom')
 * @returns The product level mapping feature
 */
export function getAppPlanProductLevelMapping(appPlan: typeof SHOP_APP_PLANS.CUSTOM, customPlanConfig: AppPlanConfig): boolean;
export function getAppPlanProductLevelMapping(appPlan: AppPlan | null): boolean;
export function getAppPlanProductLevelMapping(appPlan: AppPlan | null, customPlanConfig?: AppPlanConfig): boolean {
    const freePlan = APP_PLANS[SHOP_APP_PLANS.FREE];
    if (!appPlan) {
        return freePlan.has_product_level_mapping;
    }
    if (appPlan === SHOP_APP_PLANS.CUSTOM) {
        assertCustomPlanConfig(appPlan, customPlanConfig);
        return customPlanConfig.has_product_level_mapping;
    }
    return APP_PLANS[appPlan].has_product_level_mapping ?? freePlan.has_product_level_mapping;
}

/**
 * Get the integrate product reviews feature for a given app plan
 * @param appPlan - The app plan
 * @param customPlanConfig - Custom plan configuration (required when appPlan is 'custom')
 * @returns The integrate product reviews feature
 */
export function getAppPlanIntegrateProductReviews(appPlan: typeof SHOP_APP_PLANS.CUSTOM, customPlanConfig: AppPlanConfig): boolean;
export function getAppPlanIntegrateProductReviews(appPlan: AppPlan | null): boolean;
export function getAppPlanIntegrateProductReviews(appPlan: AppPlan | null, customPlanConfig?: AppPlanConfig): boolean {
    const freePlan = APP_PLANS[SHOP_APP_PLANS.FREE];
    if (!appPlan) {
        return freePlan.has_integrate_product_reviews;
    }
    if (appPlan === SHOP_APP_PLANS.CUSTOM) {
        assertCustomPlanConfig(appPlan, customPlanConfig);
        return customPlanConfig.has_integrate_product_reviews;
    }
    return APP_PLANS[appPlan].has_integrate_product_reviews ?? freePlan.has_integrate_product_reviews;
}

