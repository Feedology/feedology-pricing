/**
 * App Plan Types
 * Available subscription plans for shops
 */
export const SHOP_APP_PLANS = {
    FREE: 'free',
    BASIC: 'basic',
    PRO: 'pro',
    CUSTOM: 'custom',
};
/**
 * Synchronization Frequency
 */
export const SYNC_FREQUENCY = {
    HOURLY: 'hourly',
    DAILY: 'daily',
    WEEKLY: 'weekly',
};
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
        sync_frequency: [],
        instant_sync: false,
        has_product_level_mapping: false,
        has_integrate_product_reviews: false,
    },
};
/**
 * Validate custom plan configuration
 * @throws Error if appPlan is 'custom' and customPlanConfig is undefined
 */
function assertCustomPlanConfig(appPlan, customPlanConfig) {
    if (appPlan === SHOP_APP_PLANS.CUSTOM && !customPlanConfig) {
        throw new Error('customPlanConfig is required when appPlan is "custom"');
    }
}
export function getAppPlanCountFeeds(appPlan, customPlanConfig) {
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
export function getAppPlanMaxVariants(appPlan, customPlanConfig) {
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
export function getAppPlanInstantSync(appPlan, customPlanConfig) {
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
export function getAppPlanSyncFrequency(appPlan, customPlanConfig) {
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
export function getAppPlanProductLevelMapping(appPlan, customPlanConfig) {
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
export function getAppPlanIntegrateProductReviews(appPlan, customPlanConfig) {
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
//# sourceMappingURL=app-plans.js.map