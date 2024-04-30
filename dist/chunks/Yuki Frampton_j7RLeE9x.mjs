import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__2ctpiB = new Proxy({"src":"/_astro/Yuki_Frampton.Snh-WRQl.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Yuki_Frampton.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Yuki_Frampton.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Yuki_Frampton.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Yuki_Frampton.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__2ctpiB, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<h1 id=\"yuki-frampton\">Yuki Frampton</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Yuki_Frampton.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I’ve always known what I wanted to do. I’ve always been very adamant about being a music teacher. But now, being older and going through some good and bad music experiences, a lot has changed. Even so, I’ve seen great music teachers who have such care and respect for their students that’s reciprocated, and that inspired me to keep going.</p>");
	

				const frontmatter = {"title":"Yuki Frampton","description":"Yuki was set on being a music teacher, inspired by great mentors.","pubDate":"2024-02-23 14:40","author":"Sam Wu","tags":["Florida","Music"],"imgUrl":"../../assets/Yuki_Frampton.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Yuki Frampton.md";
				const url = undefined;
				function rawContent() {
					return "# Yuki Frampton\n\n![local image](../../assets/Yuki_Frampton.JPG)\n\nI've always known what I wanted to do. I've always been very adamant about being a music teacher. But now, being older and going through some good and bad music experiences, a lot has changed. Even so, I’ve seen great music teachers who have such care and respect for their students that's reciprocated, and that inspired me to keep going. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"yuki-frampton","text":"Yuki Frampton"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogPost, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
