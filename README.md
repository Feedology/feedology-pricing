# @feedology/pricing

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
  getAppPlanCountFeeds,
  getAppPlanMaxVariants,
  getAppPlanInstantSync,
  getAppPlanSyncFrequency,
  getAppPlanProductLevelMapping,
  getAppPlanIntegrateProductReviews,
} from '@feedology/pricing';

// Get plan features
const maxFeeds = getAppPlanCountFeeds('basic'); // 5
const maxVariants = getAppPlanMaxVariants('pro'); // 1000
const hasInstantSync = getAppPlanInstantSync('free'); // false
```

## Plan Features

| Feature | Free | Basic | Pro |
|---------|------|-------|-----|
| Max Feeds | 1 | 5 | 20 |
| Max Variants | 50 | 500 | 1,000 |
| Sync Frequency | Daily, Weekly | Hourly, Daily, Weekly | Hourly, Daily, Weekly |
| Instant Sync | ❌ | ✅ | ✅ |
| Product Level Mapping | ❌ | ✅ | ✅ |
| Integrate Product Reviews | ❌ | ✅ | ✅ |

## API Reference

### Constants

#### `SHOP_APP_PLANS`
Available subscription plan identifiers.

```typescript
const SHOP_APP_PLANS = {
  FREE: 'free',
  BASIC: 'basic',
  PRO: 'pro',
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

### Helper Functions

| Function | Description | Return Type |
|----------|-------------|-------------|
| `getAppPlanCountFeeds(plan)` | Get maximum number of active feeds | `number` |
| `getAppPlanMaxVariants(plan)` | Get maximum number of variants | `number` |
| `getAppPlanInstantSync(plan)` | Check if instant sync is available | `boolean` |
| `getAppPlanSyncFrequency(plan)` | Get allowed sync frequencies | `SyncFrequency[]` |
| `getAppPlanProductLevelMapping(plan)` | Check if product level mapping is available | `boolean` |
| `getAppPlanIntegrateProductReviews(plan)` | Check if product reviews integration is available | `boolean` |

> **Note:** All helper functions default to FREE plan features when `undefined` or `null` is passed.

## Types

```typescript
type AppPlan = 'free' | 'basic' | 'pro';
type SyncFrequency = 'hourly' | 'daily' | 'weekly';
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

