import { useEffect } from '@wordpress/element';
import { getSubmenuStyle } from './getSubmenuStyle';
import { SubmenuItems } from './SubmenuItems';
import { makeHierarchical } from './makeHierarchical';
import { getHeadingsFromDom } from './getHeadingsFromDom';

export const SubmenuFrontend = ({ title, className, levels, submenu_style }) => {

  const enableBackTop = () => {
    const backTop = document.querySelector('.back-top');
    if (!backTop) {
      return;
    }
    document.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 400) {
        backTop.classList.remove('d-none');
      } else {
        backTop.classList.add('d-none');
      }
    });
  };

  // Enable back top on initial render.
  useEffect(enableBackTop, []);

  const headings = getHeadingsFromDom(levels);
  const menuItems = makeHierarchical(headings);
  const style = getSubmenuStyle(className, submenu_style);

  return (
    <section className={ `block submenu-block submenu-${ style }` }>
      { !!title && (
        <h2>{ title }</h2>
      ) }
      <SubmenuItems menuItems={ menuItems }/>
    </section>
  );
};
