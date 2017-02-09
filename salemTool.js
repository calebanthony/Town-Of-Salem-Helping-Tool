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
      { text: 'Vampire Hunter', value: 'TownKilling', unique: 'N' },
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
      sortBy : function(e) {
  		value = e.target.selectedOptions[0].value;
  		switch (value) {
  			case "Jailor":
  				this.check($('#Jailor'));
  			break;
  			case "TownInvestigative":
  				if(!this.isChecked($('#TownInvestigative')))
  					this.check($('#TownInvestigative'));
  				else if(!this.isChecked($('#TownInvestigative2')))
  					this.check($('#TownInvestigative2'));
  				else if(!this.isChecked($('#RandomTown')))
  					this.check($('#RandomTown'));
  				else if(!this.isChecked($('#Any')))
  					this.check($('#Any'));
  				else
  					alert('Someone\'s lying');
  				break;
  			case "TownSupport":
  				if(!this.isChecked($('#TownSupport')))
  					this.check($('#TownSupport'));
  				else if(!this.isChecked($('#TownSupport2')))
  					this.check($('#TownSupport2'));
  				else if(!this.isChecked($('#RandomTown')))
  					this.check($('#RandomTown'));
  				else if(!this.isChecked($('#Any')))
  					this.check($('#Any'));
  				else
  					alert('Someone\'s lying');
  				break;
  			break;
  			case "TownKilling":
				if(!this.isChecked($('#TownKilling')))
  					this.check($('#TownKilling'));
  				else if(!this.isChecked($('#RandomTown')))
  					this.check($('#RandomTown'));
  				else if(!this.isChecked($('#Any')))
  					this.check($('#Any'));
  				else
  					alert('Someone\'s lying');
  				break;
  			case "TownProtective":
				if(!this.isChecked($('#TownProtective')))
  					this.check($('#TownProtective'));
  				else if(!this.isChecked($('#RandomTown')))
  					this.check($('#RandomTown'));
  				else if(!this.isChecked($('#Any')))
  					this.check($('#Any'));
  				else
  					alert('Someone\'s lying');
  				break;
  			case "Godfather":
  				this.check($('#Godfather'));
  			break;
  			case "Mafioso":
  				this.check($('#Mafioso'));
  			break;
  			case "RandomMafia":
  				this.check($('#RandomMafia'));
  			break;
  			case "NeutralKilling":
  				if(!this.isChecked($('#NeutralKilling')))
  					this.check($('#NeutralKilling'));
  				else if(!this.isChecked($('#Any')))
  					this.check($('#Any'));
  				else
  					alert('Someone\'s lying');
  				break;
  			break;
  			case "NeutralEvil":
  				if(!this.isChecked($('#NeutralEvil')))
  					this.check($('#NeutralEvil'));
  				else if(!this.isChecked($('#Any')))
  					this.check($('#Any'));
  				else
  					alert('Someone\'s lying');
  				break;
  			break;
  			case "NeutralBenign":
  				if(!this.isChecked($('#NeutralBenign')))
  					this.check($('#NeutralBenign'));
  				else if(!this.isChecked($('#Any')))
  					this.check($('#Any'));
  				else
  					alert('Someone\'s lying');
  				break;
  			break;
  			break;
  			default:
  				// statements_def
  				break;
  		}
  	},

  	isChecked : function(elem){
      return ! (elem).is(':visible');
  	},

  	check : function (elem){
   		(elem).fadeTo('slow', 0.33)
  	},

  	uncheck : function(elem){
        console.log($(elem).closest('tr'))
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
