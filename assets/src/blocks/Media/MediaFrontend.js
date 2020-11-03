import { MediaEmbedPreview } from './MediaEmbedPreview';
import { MediaElementVideo } from './MediaElementVideo';
import { useSelect } from '@wordpress/data';

const { __ } = wp.i18n;

const wrapEmbedHTML = embed_html => {
  const wrapperDiv = document.createElement('div');
  wrapperDiv.innerHTML = embed_html;
  if (wrapperDiv.firstChild?.src?.includes('youtube')) {
    wrapperDiv.firstChild.src = wrapperDiv.firstChild.src.replace('youtube.com', 'youtube-nocookie.com');
  }

  wrapperDiv.className = 'embed-container';
  if ( wrapperDiv.firstChild?.removeAttribute) {
    wrapperDiv.firstChild.removeAttribute('width');
    wrapperDiv.firstChild.removeAttribute('height');
  }

  return wrapperDiv.outerHTML;
}

export const MediaFrontend = (props) => {
  const {
    video_title,
    description,
    embed_html,
    poster_url,
    media_url,
  } = props;

  return (
    <section className="block media-block">
      <div className="container">
        {
          video_title &&
          <header>
            <h2 className="page-section-header">{ video_title }</h2>
          </header>
        }
        {
          description &&
          <div className="page-section-description" dangerouslySetInnerHTML={{ __html: description }} />
        }
        {
          media_url && media_url.endsWith('.mp4')
          ? <MediaElementVideo videoURL={ media_url } videoPoster={ poster_url } />
          : <MediaEmbedPreview html={ wrapEmbedHTML(embed_html) || null } />
        }
      </div>
    </section>
  );
};
