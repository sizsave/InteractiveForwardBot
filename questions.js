module.exports = {
	commonno:["fuck","quit","damn you","don't be stupid","you're silly","screw you","wtf"],
	commonans:["Oh oops! Let's talk another time","That's not nice! There's no talking to you.","STFU & Go To Sleep","Screw You! This conversation is over.","What? What on earth...","Dang! I thought I was nice to you"],
	questions : [
		{
			q:"Hey, How are you?",
			link:["how","not bad"],
			linkans: "I am fine too, thanks!",
			no:["no","not good","bad"],
			noq:{
				q:"Opps! Well, then take a break and let's talk another time"
			}
		},
		{
			q:"Nice! So how is the weather?",
			link:["how"],
			no:["bad"],
			linkans:"Hmm, weather is nice around here. Mild and breezy!",
			noq:{
				q:"Looks like it's only me who's having some funtime with weather. Are you okay?",
				link:["sure","yes","ha"],
				linkans:"It seems that you're in a good mood, ha?",
				no:["nah","meh","maybe","no"],
				noq:{
					q:"In that case I think we should talk another time. Do you still want to continue?",
					link:["yes","sure","why not"],
					linkans:"Perfect. Let's move on!",
					no:['no','nah'],
					noq:{
						q:"Alright bye!"
					}
				}			
			}
		},
		{
			q:"Okay. So I'd like to ask a few questions to understand whether this will be a good fit for you. Are you ok with that?",
			link:["yes"],
			no:["no","not","maybe","seriously"],
			linkans:"Perfect! Let's proceed.",
			noq:{
				q:"I think we should talk another time, What do you think?",
				no:["yes","ok","sure","perfect"],
				noq:{
					q:"Perfect! Take a deep breath and good bye"
				}
			}	
		},
		{
			q:"Are you in front of a computer? Because you need to write some code :)",
			no:["mobile","no","not"],
			linkans:"Ok then, please knock me back when you're in front of  computer"
		}
	]
}
