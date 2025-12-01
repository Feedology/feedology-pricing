# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

* Added `AppPlanConfig` interface to define the structure of app plan configurations
* Added `assertCustomPlanConfig` validation function to enforce custom plan configuration requirement

### Changed

* Updated all `getAppPlan*` functions to require `customPlanConfig` parameter when `appPlan` is `'custom'`
* Changed `appPlan` parameter type from `AppPlan | undefined | null` to `AppPlan | null` in all getter functions
* Changed `customPlanConfig` parameter type from `AppPlanConfig | null` to `AppPlanConfig | undefined` in all getter functions
* Functions now throw an error if `appPlan === 'custom'` and `customPlanConfig` is undefined (instead of falling back to free plan)

### Fixed

## [0.0.1] - 2025-12-01

### Added

* Initial release with app plan definitions and getter functions

