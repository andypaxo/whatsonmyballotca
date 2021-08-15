const ballotData = {
  provincial: [
    {
      text: 'A ballot to pick federal senators to represent the province in Ottawa.',
      description: 'Note: <a href="https://www.canada.ca/en/campaign/independent-advisory-board-for-senate-appointments/about-the-senate.html" target="_blank">Senators are not elected in Canada</a>. <br>Candidates can be found <a href="https://www.elections.ab.ca/political-participants/senate-candidates/" target="_blank">here</a>.'
    },
    {
      text: 'Do you want Alberta to adopt year-round Daylight Saving Time, which is summer hours, eliminating the need to change our clocks twice a year?',
      description: 'According to the <a href="https://www.qp.alberta.ca/documents/Orders/Orders_in_Council/2021/2021_242.pdf" target="_blank">order in council</a>, the Lieutenant Governor in Council has specified that this result will be legally binding.'
    },
    {
      text: 'Should section 36(2) of the Constitution Act, 1982 - Parliament and the government of Canada\'s commitment to the principle of making equalization payments - be removed from the constitution?',
      description: 'Note: <a href="https://www.constitutionalstudies.ca/2021/08/can-a-provincial-referendum-trigger-a-legal-duty-to-enter-constitutional-negotiations-albertas-2021-equalization-referendum-and-the-reference-re-secession-of-quebec/" target="_blank">Alberta would need federal government approval for any change and seven of 10 provinces would have to agree to any constitutional amendments</a>.'
    },
  ],
  municipalities: {
    Calgary: [
      {
        text: 'Mayor',
        description: 'Candidates can be found <a href="https://www.calgary.ca/election/information-for-voters/candidates.html" target="_blank">here</a>.',
      },
      {
        text: 'Ward councillor',
        description: 'Candidates can be found <a href="https://www.calgary.ca/election/information-for-voters/candidates.html" target="_blank">here</a>.',
      },
      {
        text: 'School Board trustee (public or separate)',
        description: 'Candidates can be found <a href="https://www.calgary.ca/election/information-for-voters/candidates.html" target="_blank">here</a>.',
      },
      {
        text: 'Are you in favour of reintroducing fluoridation of the municipal water supply?',
        description: 'Further information can be found <a href="https://www.calgary.ca/uep/water/drinking-water/fluoride.html" target="_blank">here</a>',
      },
    ],
    Edmonton: [
      {
        text: 'Mayor',
        description: 'Candidates can be found <a href="https://www.edmonton.ca/city_government/municipal_elections/for-voters" target="_blank">here</a>.'
      },
      {
        text: 'Ward councillor',
        description: 'Candidates can be found <a href="https://www.edmonton.ca/city_government/municipal_elections/for-voters" target="_blank">here</a>.'
      },
      {
        text: 'School Board trustee (public or separate)',
        description: 'Candidates can be found <a href="https://www.edmonton.ca/city_government/municipal_elections/for-voters" target="_blank">here</a>.'
      },
    ],
    Airdrie: [
      {
        text: 'Mayor',
        description: 'Candidates can be found <a href="https://www.airdrie.ca/index.cfm?serviceID=1707" target="_blank">here</a>.'
      },
      {
        text: 'Ward councillor',
        description: 'Candidates can be found <a href="https://www.airdrie.ca/index.cfm?serviceID=1707" target="_blank">here</a>.'
      },
      {
        text: 'School Board trustee (public or separate)',
        description: 'Candidates can be found <a href="https://www.airdrie.ca/index.cfm?serviceID=1707" target="_blank">here</a>.'
      },
    ],
    'Grande Prairie': [
      {
        text: 'Mayor',
        description: 'Candidates can be found <a href="https://www.cityofgp.com/election" target="_blank">here</a>.'
      },
      {
        text: 'Ward councillor',
        description: 'Candidates can be found <a href="https://www.cityofgp.com/election" target="_blank">here</a>.'
      },
      {
        text: 'School Board trustee (public or separate)',
        description: 'Candidates can be found <a href="https://www.cityofgp.com/election" target="_blank">here</a>.'
      },
    ],
    Lethbridge: [
      {
        text: 'Mayor',
        description: 'Candidates can be found <a href="https://www.lethbridge.ca/City-Government/Elections/Pages/Candidates.aspx" target="_blank">here</a>.'
      },
      {
        text: 'Ward councillor',
        description: 'Candidates can be found <a href="https://www.lethbridge.ca/City-Government/Elections/Pages/Candidates.aspx" target="_blank">here</a>.'
      },
      {
        text: 'School Board trustee (public or separate)',
        description: 'Candidates can be found <a href="https://www.lethbridge.ca/City-Government/Elections/Pages/Candidates.aspx" target="_blank">here</a>.'
      },
      {
        text: 'Do you support using a ward system to elect City Councillors (other than the Mayor) starting with the 2025 municipal election?',
        description: '<a href="https://www.lethbridge.ca/City-Government/Elections/Pages/default.aspx" target="_blank">Source</a>.',
      },
      {
        text: 'Do you agree that city council should approve plans to construct a 3rd bridge prior to 2030 as a municipal capital project priority?',
        description: '<a href="https://www.lethbridge.ca/City-Government/Elections/Pages/default.aspx" target="_blank">Source</a>.',
      },
    ],
    'Medicine Hat': [
      {
        text: 'Mayor',
        description: 'Candidates can be found <a href="https://www.medicinehat.ca/what-s-new/election" target="_blank">here</a>.'
      },
      {
        text: 'Ward councillor',
        description: 'Candidates can be found <a href="https://www.medicinehat.ca/what-s-new/election" target="_blank">here</a>.'
      },
      {
        text: 'School Board trustee (public or separate)',
        description: 'Candidates can be found <a href="https://www.medicinehat.ca/what-s-new/election" target="_blank">here</a>.'
      },
    ],
    'Red Deer': [
      {
        text: 'Mayor',
        description: 'Candidates can be found <a href="https://elections.reddeer.ca/for-voters/whos-running/" target="_blank">here</a>.'
      },
      {
        text: 'Ward councillor',
        description: 'Candidates can be found <a href="https://elections.reddeer.ca/for-voters/whos-running/" target="_blank">here</a>.'
      },
      {
        text: 'School Board trustee (public or separate)',
        description: 'Candidates can be found <a href="https://elections.reddeer.ca/for-voters/whos-running/" target="_blank">here</a>.'
      },
    ],
    'St. Albert': [
      {
        text: 'Mayor',
        description: 'Candidates can be found <a href="https://stalbert.ca/cosa/elections-census/election/whos-running/" target="_blank">here</a>.'
      },
      {
        text: 'Ward councillor',
        description: 'Candidates can be found <a href="https://stalbert.ca/cosa/elections-census/election/whos-running/" target="_blank">here</a>.'
      },
      {
        text: 'School Board trustee (public or separate)',
        description: 'Candidates can be found <a href="https://stalbert.ca/cosa/elections-census/election/whos-running/" target="_blank">here</a>.'
      },
    ]
  }
}
