/**
 * A transformer that injects all the links passed to it
 * as `a` elements with the appropriate name
 */
export class LinksTransformer {
    constructor(links) {
      this.links = links
    }
    
    async element(element) {
        this.links.forEach(link => {
            
            element.append(`<a href="${link.url}">${link.name}</a>`, { html: true });
        });
    }
}

/**
 * A transformer that removes the `display:none` style, allowing the
 * element to be displayed
 */
export class DisplayTransformer {
    async element(element) {
        const displayNone = 'display: none';
        const style = element.getAttribute('style')
        if (style) {
            element.setAttribute('style', style.replace(displayNone, ''));
        }
    }
}


/**
 * A transformer that injects an image element with a src attribute
 * pointing to a url that is passed to the constructor
 */
export class ImageTransformer {
    constructor(imageUrl) {
        this.imageUrl = imageUrl;
    }

    async element(element) {
        element.setAttribute('src', this.imageUrl);
    }
}

/**
 * A transformer that modifies the content of the element to be the **text** passed
 * to it as an argument to its constructor
 */
export class NameTransformer {
    constructor(name) {
        this.name = name;
    }

    async element(element) {
        element.setInnerContent(this.name);
    }
}

/**
 * A transformer that appends the social links passed to it to an element, showing the logos as svgs
 */
export class SocialTransformer {
    constructor(socialLinks) {
        this.socialLinks = socialLinks;
    }

    async element(element) {
        this.socialLinks.forEach(social => {
            const html = `<a href="${social.url}"><img src="${social.svg}"/></a>`
            element.append(html, { html: true });
        });
    }
}

/**
 * A transformer that sets the class of an element, used to set background classes
 */
export class BackgroundTransformer {
    constructor(color) {
        this.color = color;
    }

    async element(element) {
        element.setAttribute('class',this.color);
    }
}
