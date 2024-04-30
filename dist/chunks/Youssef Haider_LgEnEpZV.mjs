import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__ulapF = new Proxy({"src":"/_astro/Youssef_Haider.n8rO4wkU.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Youssef_Haider.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Youssef_Haider.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Youssef_Haider.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Youssef_Haider.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__ulapF, ...props});
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
			const html = await updateImageReferences("<h1 id=\"youssef-haider\">Youssef Haider</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Youssef_Haider.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I always remind myself that my family was sacrificing a lot financially and emotionally to bring me here, thousands of miles away from them, to further my education. It helps me perform well on my own academically. It helped me make the most out of the connections and making friendships.</p>\n<p>There have been times I haven’t done so well in a course or studied as well for an exam, but over time that happened less and less because I’m just getting to know how I study best, and how I work best. It’s definitely been a journey. But, yeah, it keeps on going.</p>");
	

				const frontmatter = {"title":"Youssef Haider","description":"For Youssef, family sacrifice fuels academic success, even during difficult times.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["Family","Engineering","Egyptian"],"imgUrl":"../../assets/Youssef_Haider.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Youssef Haider.md";
				const url = undefined;
				function rawContent() {
					return "# Youssef Haider\n\n![local image](../../assets/Youssef_Haider.JPG)\n\nI always remind myself that my family was sacrificing a lot financially and emotionally to bring me here, thousands of miles away from them, to further my education. It helps me perform well on my own academically. It helped me make the most out of the connections and making friendships.\n\nThere have been times I haven't done so well in a course or studied as well for an exam, but over time that happened less and less because I'm just getting to know how I study best, and how I work best. It's definitely been a journey. But, yeah, it keeps on going.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"youssef-haider","text":"Youssef Haider"}];
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