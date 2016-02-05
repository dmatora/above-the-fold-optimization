# WordPress Above The Fold Optimization
This plugin enables to pass the "`Eliminate render-blocking JavaScript and CSS in above-the-fold content`"-rule from [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).

https://wordpress.org/plugins/above-the-fold-optimization/

The functionality of this plugin is simple and light-weight. The plugin simply inserts Critical Path CSS code inline, helps to create it and optionally optimizes the delivery of the full website CSS.

The plugin is intended to work together with other optimization plugins such as [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/) and [Autoptimize](https://wordpress.org/plugins/autoptimize/).

**Note:** *The plugin is intended to achieve the best possible result, not easy usage. It is intended for advanced WordPress users and optimization professionals.*

#### Critical Path CSS generation

The plugin enables automated Critical Path CSS generation via [Penthouse.js](https://github.com/pocketjoso/penthouse). The plugin will execute Penthouse.js to generate Critical Path CSS for multiple responsive dimensions and pages. It then combines the resulting CSS-code and then compresses the CSS-code via [Clean-CSS](https://github.com/jakubpawlowicz/clean-css).

#### Full CSS extraction

The plugin enables the extraction of full CSS from pages for use in critical path CSS generation.

#### Javascript localization

The plugin enables the localization of external javascript resources such as Google Analytics and Facebook SDK to pass the "[Leverage browser caching](https://developers.google.com/speed/docs/insights/LeverageBrowserCaching)"-rule from Google PageSpeed Insights.

#### CSS Delivery Optimization

When the option ``Optimize CSS Delivery`` is enabled all CSS links are loaded asynchronously via an optimized version of [LoadCSS](https://github.com/filamentgroup/loadCSS) and rendered via ``requestAnimationFrame API`` following the [recommendations by Google](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery).

#### Demo
The following demo is an original WordPress blog ``v4.4.2`` with the default theme, [Autoptimize](https://wordpress.org/plugins/autoptimize/) javascript and CSS optimization, [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/) for full-page cache and the Above The Fold Optimization plugin. Using just these 3 plugins it is possible to achieve a PageSpeed 100-score.

https://abovethefold.optimalisatie.nl/

https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fabovethefold.optimalisatie.nl%2F&tab=mobile

## Installation

#### WordPress plugin installation

1. Upload the `above-the-fold-optimization/` directory to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Navigate to the plugin settings-page
4. Generate Critical Path CSS

To make use of automated Critical Path CSS generation it is required to install the following software on the server:

1. [PhantomJS](http://phantomjs.org/): ``npm install -g phantomjs``
2. [Clean-CSS](https://github.com/jakubpawlowicz/clean-css): ``npm install -g clean-css``
From the `above-the-fold-optimization/` directory:
3. ``npm install``

To be able to generate Critical Path CSS from within the WordPress admin the software needs to be executable from PHP which may pose a security risk. An alternative option is to generate a CLI command to execute via SSH.

## Maintainers

* [@optimalisatie](https://github.com/optimalisatie)

## License

(C) [www.optimalisatie.nl](https://optimalisatie.nl) 2014–2016, released under the MIT license
