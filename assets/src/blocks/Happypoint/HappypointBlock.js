import { HappypointEditor } from './HappypointEditor';
import { HappypointV1 } from './HappypointV1';

export class HappypointBlock {
  constructor() {
    const { registerBlockType } = wp.blocks;
    const { __ } = wp.i18n;

    registerBlockType('planet4-blocks/happypoint', {
      title: __('Happypoint', 'planet4-blocks-backend'),
      icon: 'format-image',
      category: 'planet4-blocks',
      supports: {
        multiple: false, // Use the block just once per post.
        html: false, // Disable "Edit as HTMl" block option.
      },
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
          validation: ({ iframe_url, mailing_list_iframe }) => {
            const isValid = mailing_list_iframe === false || iframe_url !== '';
            const messages = [__(
              'Happypoint: "Use mailing list iframe" is set to "On" but there is no IFrame URL',
              'planet4-blocks-backend'
            )];

            return { isValid, messages };
          }
        },
        id: {
          type: 'number',
        },
        load_iframe: {
          type: 'boolean',
          default: false
        }
      },
      edit: HappypointEditor,
      save() {
        return null;
      },
      deprecated: [
        HappypointV1,
      ],
    });
  }
}
