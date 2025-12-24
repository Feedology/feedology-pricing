# feedology-pricing

Shared pricing and subscription plan definitions for Feedology app.

## Overview

This module contains the centralized definitions for app subscription plans and their associated features. It's designed to be shared across multiple services (API, Queue, etc.) to ensure consistency.

## Installation

```bash
# From the backend directory
cd pricing
npm install
npm run build
```

## Usage

```typescript
import {
  SHOP_APP_PLANS,
  APP_PLANS,
  AppPlanConfig,
  getAppPlanCountFeeds,
  getAppPlanMaxVariants,
  getAppPlanInstantSync,
  getAppPlanSyncFrequency,
  getAppPlanProductLevelMapping,
  getAppPlanIntegrateProductReviews,
} from 'feedology-pricing';

// Get plan features for standard plans
const maxFeeds = getAppPlanCountFeeds('basic'); // 5
const maxVariants = getAppPlanMaxVariants('pro'); // 1000
const hasInstantSync = getAppPlanInstantSync('free'); // false

// Custom plan requires configuration
const customConfig: AppPlanConfig = {
  name: 'Enterprise', // optional
  price: 99, // optional
  recurring: true,
  count_feeds: 100,
  count_variants: 10000,
  sync_frequency: ['hourly', 'daily'],
  instant_sync: true,
  has_product_level_mapping: true,
  has_integrate_product_reviews: true,
};

const customMaxFeeds = getAppPlanCountFeeds('custom', customConfig); // 100
```

## Plan Features

| Feature | Free | Basic | Pro | Custom |
|---------|------|-------|-----|--------|
| Max Feeds | 1 | 5 | 20 | Configurable |
| Max Variants | 50 | 500 | 1,000 | Configurable |
| Sync Frequency | Daily, Weekly | Hourly, Daily, Weekly | Hourly, Daily, Weekly | Configurable |
| Instant Sync | ❌ | ✅ | ✅ | Configurable |
| Product Level Mapping | ❌ | ✅ | ✅ | Configurable |
| Integrate Product Reviews | ❌ | ✅ | ✅ | Configurable |

> **Note:** Custom plans require an `AppPlanConfig` object to be provided. All features are configurable per customer requirements.

## API Reference

### Constants

#### `SHOP_APP_PLANS`
Available subscription plan identifiers.

```typescript
const SHOP_APP_PLANS = {
  FREE: 'free',
  BASIC: 'basic',
  PRO: 'pro',
  CUSTOM: 'custom',
} as const;
```

#### `SYNC_FREQUENCY`
Available synchronization frequencies.

```typescript
const SYNC_FREQUENCY = {
  HOURLY: 'hourly',
  DAILY: 'daily',
  WEEKLY: 'weekly',
} as const;
```

#### `APP_PLANS`
Complete plan configuration object with all features per plan.

#### `AppPlanConfig`
Interface for custom plan configuration. Required when using `'custom'` plan type.

```typescript
interface AppPlanConfig {
  name?: string;
  price?: number;
  recurring: boolean;
  count_feeds: number;
  count_variants: number;
  sync_frequency: readonly SyncFrequency[];
  instant_sync: boolean;
  has_product_level_mapping: boolean;
  has_integrate_product_reviews: boolean;
}
```

### Helper Functions

| Function | Description | Return Type |
|----------|-------------|-------------|
| `getAppPlanCountFeeds(plan)` or `getAppPlanCountFeeds('custom', config)` | Get maximum number of active feeds | `number` |
| `getAppPlanMaxVariants(plan)` or `getAppPlanMaxVariants('custom', config)` | Get maximum number of variants | `number` |
| `getAppPlanInstantSync(plan)` or `getAppPlanInstantSync('custom', config)` | Check if instant sync is available | `boolean` |
| `getAppPlanSyncFrequency(plan)` or `getAppPlanSyncFrequency('custom', config)` | Get allowed sync frequencies | `SyncFrequency[]` |
| `getAppPlanProductLevelMapping(plan)` or `getAppPlanProductLevelMapping('custom', config)` | Check if product level mapping is available | `boolean` |
| `getAppPlanIntegrateProductReviews(plan)` or `getAppPlanIntegrateProductReviews('custom', config)` | Check if product reviews integration is available | `boolean` |

> **Note:** For standard plans (`'free'`, `'basic'`, `'pro'`), only pass the `plan` parameter. For `'custom'` plan, you must also pass the `config` parameter.

**Function Signatures:**
```typescript
// For custom plans - customPlanConfig is required
function getAppPlanCountFeeds(
  appPlan: 'custom',
  customPlanConfig: AppPlanConfig
): number;

// For standard plans - customPlanConfig is not needed
function getAppPlanCountFeeds(
  appPlan: AppPlan | null
): number;

// ... similar for all other functions
```

> **Note:** 
> - All helper functions use **function overloading** to enforce type safety
> - For standard plans (`'free'`, `'basic'`, `'pro'`), you **do not need** to pass `customPlanConfig`
> - For `'custom'` plan, `customPlanConfig` is **required** (TypeScript will enforce this at compile time)
> - Functions default to FREE plan features when `appPlan` is `null`
> - Functions throw a runtime error if `appPlan === 'custom'` and `customPlanConfig` is not provided

## Types

```typescript
type AppPlan = 'free' | 'basic' | 'pro' | 'custom';
type SyncFrequency = 'hourly' | 'daily' | 'weekly';

interface AppPlanConfig {
  name: string;
  price: number;
  recurring: boolean;
  count_feeds: number;
  count_variants: number;
  sync_frequency: readonly SyncFrequency[];
  instant_sync: boolean;
  has_product_level_mapping: boolean;
  has_integrate_product_reviews: boolean;
}
```

## Development

```bash
# Build the module
npm run build

# Clean build artifacts
npm run clean
```

## License

UNLICENSED - Private module for Feedology

