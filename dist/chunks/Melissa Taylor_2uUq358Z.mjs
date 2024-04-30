import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__ZKPk1J = new Proxy({"src":"/_astro/Melissa_Taylor.tKhM1MB5.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Melissa_Taylor.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Melissa_Taylor.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Melissa_Taylor.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Melissa_Taylor.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__ZKPk1J, ...props});
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
			const html = await updateImageReferences("<h1 id=\"melissa-taylor\">Melissa Taylor</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Melissa_Taylor.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>In high school, I was constantly doing a lot. I’ve always been the one who does good things and is capable of doing a lot of good things. Whenever I received valuation in high school it would be like, wow, you got a great grade, or, you accomplished this great project.</p>\n<p>Then, in college, I had this super bad migraine. I have headaches all the time, but I never had a migraine. It was pretty much caused by stress. I legit was dizzy, my balance was super off and I couldn’t see and it was awful. That migraine was caused by a Chiari malformation. I realized the stress was really bad and I needed to do less, but at that point, I was doing three jobs and I was a leader in three clubs and was taking 18 credits. At that point, people are always like, if you need help, I can help you with anything, or, you should just do less. Well, it’s easier said than done, especially when you’re so used to always being the one who gives help and not the one who receives help. When you say you’re getting brain surgery or recovering from a psychotic episode, people look at you like you’re a sick puppy. They’re like, how can I help you? And that can be very debilitating. But there eventually came to a point where I started getting used to being helped by people. I was like, this is actually kind of nice. But you also have to be able to come back and balance it more. It can still be healthy for me to not ask for help sometimes. I can still challenge myself, right? And other times I can be like, this isn’t working, I need help.</p>\n<p>So there were legit times throughout 2022 when I literally started practicing asking for help. Every day I had my best friend check in and be like, how did you ask for help today? And I either would make something up because I didn’t or I would start being more proactive about asking for help. There were times when I had to think, surely I did something that was sort of asking for help today. So I worked on asking for and accepting help when it’s offered.</p>\n<p>Humility just doesn’t do good with pride. My best friend explained at one point, it was like I was physically carrying a lot and she like wanted to carry some of it for me. And I was like, no, I can do it. And she was like, no, it’s not that I don’t think that you can do it, it’s that I want to make it a little bit easier and I want to help you. That was interesting for me to see because when people offer me help, I feel I’m not good enough and they’re thinking that I can’t do it by myself. Which is generally not the case. I realized as I was talking to her that the way that she sees me and the way that God sees me is very different from how I used to see myself. Like, whether or not I can finish all these assignments or carry like eight grocery bags into the house at the same time is not the main identifier of my identity. My best friend is still going to love me if I were to drop one of these bags, but also she can just carry half of them.</p>\n<p>Changing the mindset that allows you to do that is huge. My faith is super important to me. Throughout the psychotic episode and recovering from a psychotic episode, you come out of that and you can’t trust yourself or other people. Definitely can’t trust God. It’s terrifying and you’re anxious about everything and depressed and it’s impossible to get out of bed every day. And then you’re like trying to write stuff and you can’t write even though you’ve been good at writing your entire life because your cognition straight up doesn’t work due to the medication. And that’s all super frustrating. So being home for what was essentially an indefinite period was really helpful because it forced me to do less. My mom and my dad were legit, like, I don’t want you to help with your little brother. I don’t want you to work. I don’t want you to do things. I want you to just sit there or like go walk the dog. And so I had the space to do nothing. I did a lot of journaling and read the Bible a lot. I tried to get involved with the community at home, which I knew would be difficult because I’m traditionally very judgmental of the people back at home. I asked God to help me not be judgmental of these people and be able to exist and value them because they’re just as valuable as anybody else.</p>\n<p>It was a lot of unpacking, deconstructing, and reconstructing. I started learning how to grow.  I started reading. I’m pretty good at thrifting now. I started listening to podcasting. I used to never have time for that. I went to go run on the treadmill in the gym. In the past, I would much rather find somewhere to hide in the gym where people aren’t going to see me. Then I started practicing at home. I started to know what to do with all the equipment. I did a lot of biking and cooking. A lot of cool stuff that I like to do but I never have time for.</p>");
	

				const frontmatter = {"title":"Melissa Taylor","description":"Melissa initially struggled with overcommitment and a stress-induced migraine, leading to a realization of the need for self-care.","pubDate":"2024-01-30 09:27","author":"Sam Wu","tags":["Education","Mental Health","Growth","Black"],"imgUrl":"../../assets/Melissa_Taylor.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Melissa Taylor.md";
				const url = undefined;
				function rawContent() {
					return "# Melissa Taylor\n\n![local image](../../assets/Melissa_Taylor.JPG)\n\nIn high school, I was constantly doing a lot. I've always been the one who does good things and is capable of doing a lot of good things. Whenever I received valuation in high school it would be like, wow, you got a great grade, or, you accomplished this great project. \n\nThen, in college, I had this super bad migraine. I have headaches all the time, but I never had a migraine. It was pretty much caused by stress. I legit was dizzy, my balance was super off and I couldn't see and it was awful. That migraine was caused by a Chiari malformation. I realized the stress was really bad and I needed to do less, but at that point, I was doing three jobs and I was a leader in three clubs and was taking 18 credits. At that point, people are always like, if you need help, I can help you with anything, or, you should just do less. Well, it’s easier said than done, especially when you're so used to always being the one who gives help and not the one who receives help. When you say you're getting brain surgery or recovering from a psychotic episode, people look at you like you're a sick puppy. They're like, how can I help you? And that can be very debilitating. But there eventually came to a point where I started getting used to being helped by people. I was like, this is actually kind of nice. But you also have to be able to come back and balance it more. It can still be healthy for me to not ask for help sometimes. I can still challenge myself, right? And other times I can be like, this isn't working, I need help. \n\nSo there were legit times throughout 2022 when I literally started practicing asking for help. Every day I had my best friend check in and be like, how did you ask for help today? And I either would make something up because I didn't or I would start being more proactive about asking for help. There were times when I had to think, surely I did something that was sort of asking for help today. So I worked on asking for and accepting help when it's offered.\n\nHumility just doesn't do good with pride. My best friend explained at one point, it was like I was physically carrying a lot and she like wanted to carry some of it for me. And I was like, no, I can do it. And she was like, no, it's not that I don’t think that you can do it, it’s that I want to make it a little bit easier and I want to help you. That was interesting for me to see because when people offer me help, I feel I'm not good enough and they're thinking that I can't do it by myself. Which is generally not the case. I realized as I was talking to her that the way that she sees me and the way that God sees me is very different from how I used to see myself. Like, whether or not I can finish all these assignments or carry like eight grocery bags into the house at the same time is not the main identifier of my identity. My best friend is still going to love me if I were to drop one of these bags, but also she can just carry half of them.\n\nChanging the mindset that allows you to do that is huge. My faith is super important to me. Throughout the psychotic episode and recovering from a psychotic episode, you come out of that and you can't trust yourself or other people. Definitely can't trust God. It's terrifying and you're anxious about everything and depressed and it’s impossible to get out of bed every day. And then you're like trying to write stuff and you can't write even though you've been good at writing your entire life because your cognition straight up doesn't work due to the medication. And that's all super frustrating. So being home for what was essentially an indefinite period was really helpful because it forced me to do less. My mom and my dad were legit, like, I don't want you to help with your little brother. I don't want you to work. I don't want you to do things. I want you to just sit there or like go walk the dog. And so I had the space to do nothing. I did a lot of journaling and read the Bible a lot. I tried to get involved with the community at home, which I knew would be difficult because I'm traditionally very judgmental of the people back at home. I asked God to help me not be judgmental of these people and be able to exist and value them because they're just as valuable as anybody else. \n\nIt was a lot of unpacking, deconstructing, and reconstructing. I started learning how to grow.  I started reading. I’m pretty good at thrifting now. I started listening to podcasting. I used to never have time for that. I went to go run on the treadmill in the gym. In the past, I would much rather find somewhere to hide in the gym where people aren't going to see me. Then I started practicing at home. I started to know what to do with all the equipment. I did a lot of biking and cooking. A lot of cool stuff that I like to do but I never have time for. \n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"melissa-taylor","text":"Melissa Taylor"}];
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
