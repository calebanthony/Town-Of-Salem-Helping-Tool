var vue = new Vue({
  el: '#app',
  data: {
    selected: 'A',
    myStack: [],
    options: [
      { text: 'Jailor', value: 'Jailor', unique: 'Y' },
      { text: 'Investigator', value: 'TownInvestigative', unique: 'N' },
      { text: 'Lookout', value: 'TownInvestigative', unique: 'N' },
      { text: 'Sheriff', value: 'TownInvestigative', unique: 'N' },
      { text: 'Spy', value: 'TownInvestigative', unique: 'N' },
      { text: 'Escort', value: 'TownSupport', unique: 'N' },
      { text: 'Mayor', value: 'TownSupport', unique: 'Y' },
      { text: 'Medium', value: 'TownSupport', unique: 'N' },
      { text: 'Retributionist', value: 'TownSupport', unique: 'Y' },
      { text: 'Transporter', value: 'TownSupport', unique: 'N' },
      { text: 'Bodyguard', value: 'TownProtective', unique: 'N' },
      { text: 'Doctor', value: 'TownProtective', unique: 'N' },
      // { text: 'Vampire Hunter', value: 'TownKilling', unique: 'N' },
      { text: 'Vigilante', value: 'TownKilling', unique: 'N' },
      { text: 'Veteran', value: 'TownKilling', unique: 'Y' },
      { text: 'Godfather', value: 'Godfather', unique: 'Y' },
      { text: 'Mafioso', value: 'Mafioso', unique: 'Y' },
      { text: 'Blackmailer', value: 'RandomMafia', unique: 'N' },
      { text: 'Consigliere', value: 'RandomMafia', unique: 'N' },
      { text: 'Consort', value: 'RandomMafia', unique: 'N' },
      { text: 'Disguiser', value: 'RandomMafia', unique: 'N' },
      { text: 'Forger', value: 'RandomMafia', unique: 'N' },
      { text: 'Framer', value: 'RandomMafia', unique: 'N' },
      { text: 'Janitor', value: 'RandomMafia', unique: 'N' },
      { text: 'Arsonist', value: 'NeutralKilling', unique: 'N' },
      { text: 'Serial Killer', value: 'NeutralKilling', unique: 'N' },
      { text: 'Werewolf', value: 'NeutralKilling', unique: 'Y' },
      { text: 'Executioner', value: 'NeutralEvil', unique: 'N' },
      { text: 'Jester', value: 'NeutralEvil', unique: 'N' },
      { text: 'Witch', value: 'NeutralEvil', unique: 'N' },
      { text: 'Amnesiac', value: 'NeutralBenign', unique: 'N' },
      { text: 'Survivor', value: 'NeutralBenign', unique: 'N' },
    ]
  },
  methods: {
  	isChecked : function(elem){
      return ! (elem).is(':visible');
  	},

  	check : function (elem){
   		(elem).fadeTo('slow', 0.33)
  	},

  	uncheck : function(elem){
	    $(elem).fadeTo('slow', 1.0);
  	},

  }
})

$('tr td p').on('click',function(){
  let elem = $(this).closest('tr')
	if($(elem).css('opacity') == 0.33)
		vue.$options.methods.uncheck($(elem));
	else
		vue.$options.methods.check($(elem));
})
