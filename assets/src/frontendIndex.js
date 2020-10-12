import { SpreadsheetFrontend } from './blocks/Spreadsheet/SpreadsheetFrontend';
import { CounterFrontend } from './blocks/Counter/CounterFrontend';
import { ArticlesFrontend } from './blocks/Articles/ArticlesFrontend';
import { CookiesFrontend } from './blocks/Cookies/CookiesFrontend';
import { SplittwocolumnsFrontend } from './blocks/Splittwocolumns/SplittwocolumnsFrontend';
import { HappypointFrontend } from './blocks/Happypoint/HappypointFrontend';
import { GalleryFrontend } from './blocks/Gallery/GalleryFrontend';

const COMPONENTS = {
  'planet4-blocks/spreadsheet': SpreadsheetFrontend,
  'planet4-blocks/counter': CounterFrontend,
  'planet4-blocks/articles': ArticlesFrontend,
  'planet4-blocks/cookies': CookiesFrontend,
  'planet4-blocks/split-two-columns': SplittwocolumnsFrontend,
  'planet4-blocks/happypoint': HappypointFrontend,
  'planet4-blocks/gallery': GalleryFrontend,
};

const doRender = async () => {
  const usePortals = window.location.hash === '#portals';
  if (!usePortals) {
    document.querySelectorAll(`[data-render]`).forEach(
      blockNode => {
        const blockName = blockNode.dataset.render;
        const BlockFrontend = COMPONENTS[blockName];
        const attributes = JSON.parse(blockNode.dataset.attributes);
        wp.element.render(<BlockFrontend { ...attributes.attributes } />, blockNode);
      }
    );
  } else {
    const blocks = [...document.querySelectorAll(`[data-render]`)];
    wp.element.render(
      <div style={ { display: 'none' } }>
        { blocks.map(blockNode => {
          const blockName = blockNode.dataset.render;
          const BlockFrontend = COMPONENTS[blockName];
          const attributes = JSON.parse(blockNode.dataset.attributes);

          return wp.element.createPortal(
            <BlockFrontend { ...attributes.attributes } />,
            blockNode
          );
        }) }
      </div>,
      document.getElementById('phony-root')
    );
  }
}
doRender();
