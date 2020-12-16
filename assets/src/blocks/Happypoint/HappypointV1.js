export const HappypointV1 = {
  attributes: {
    focus_image: {
      type: 'string',
    },
    opacity: {
      type: 'number',
      default: 30
    },
    mailing_list_iframe: {
      type: 'boolean',
    },
    iframe_url: {
      type: 'string',
    },
    id: {
      type: 'number',
    },
    load_iframe: {
      type: 'boolean',
      default: false
    }
  },
  isEligible({mailing_list_iframe, iframe_url}) {
    return mailing_list_iframe === false && iframe_url !== '';
  },
  migrate( { mailing_list_iframe, iframe_url, ...attributes } ) {
    return {
      ...attributes,
      iframe_url,
      mailing_list_iframe: (iframe_url !== '')
    };
  },
  save: () => null
};
