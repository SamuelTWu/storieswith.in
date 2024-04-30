import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z2knAVa = new Proxy({"src":"/_astro/Abdul_Malik.F_UpiDEw.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Abdul_Malik.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Abdul_Malik.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Abdul_Malik.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Abdul_Malik.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z2knAVa, ...props});
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
			const html = await updateImageReferences("<h1 id=\"abdul-malik\">Abdul Malik</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Abdul_Malik.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>The world must embrace love. We should love each other because if we love each other, I believe the world will be peaceful. There will be no anger, there will be no hatred, there will be no sickness at all.</p>\n<p>I believe everything is based on love. Your parents are giving back by sending you to college. If you get married to your spouse, whatever you want to do, if there is love, it will go pretty smoothly. I’m passionate about helping humanity. I believe if someone like me grows to become a business leader, I’ll be able to make an impact in the world.</p>");
	

				const frontmatter = {"title":"Abdul Malik","description":"For Abdul, love is the key to peace, health, and success for all.","pubDate":"2024-02-29 9:08","author":"Sam Wu","tags":["Business","Nigeria","International","Black"],"imgUrl":"../../assets/Abdul_Malik.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Abdul Malik.md";
				const url = undefined;
				function rawContent() {
					return "# Abdul Malik\n\n![local image](../../assets/Abdul_Malik.JPG)\n\nThe world must embrace love. We should love each other because if we love each other, I believe the world will be peaceful. There will be no anger, there will be no hatred, there will be no sickness at all.\n\nI believe everything is based on love. Your parents are giving back by sending you to college. If you get married to your spouse, whatever you want to do, if there is love, it will go pretty smoothly. I'm passionate about helping humanity. I believe if someone like me grows to become a business leader, I'll be able to make an impact in the world.\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"abdul-malik","text":"Abdul Malik"}];
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
