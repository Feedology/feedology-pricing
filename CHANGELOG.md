# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.3] - 2025-12-01

### Added

* Add `AppPlanConfig` interface to define plan configuration structure
* Add `assertCustomPlanConfig` validation function to enforce custom plan configuration requirement

### Changed

* Update all `getAppPlan*` functions to require `customPlanConfig` parameter when `appPlan` is `'custom'`
* Change `appPlan` parameter type to `AppPlan | null` in all getter functions
* Change `customPlanConfig` parameter type to `AppPlanConfig | undefined` in all getter functions
* Functions now throw an error if `appPlan === 'custom'` and `customPlanConfig` is undefined (instead of falling back to free plan)

## [0.0.1] - 2025-12-01

### Added

* Initial release with app plan definitions and getter functions

