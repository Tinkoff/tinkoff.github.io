const REDIRECTS = {
    'tui-editor': 'https://taiga-family.github.io/tui-editor',
    'ng-web-apis': 'https://taiga-family.github.io/ng-web-apis',
    'ng-morph': 'https://taiga-family.github.io/ng-morph',
    'ng-polymorpheus': 'https://taiga-family.github.io/ng-polymorpheus',
};

const [_, possibleBaseHref, ...pathSegments] = location.pathname.split('/');
const redirectUrl = REDIRECTS[possibleBaseHref];

if (redirectUrl) {
    location.replace(`${redirectUrl}/${pathSegments.join('/')}${location.search}`);
}
