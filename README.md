## You Do You

You Do You is a dating app that matches users by strict criteria: first name, birthdate, or bloodtype.

### Motivation

There are a lot of dating sites, ranging from the largely unfocused (eg Match) to the narrowly focused (eg Farmers Only). I felt there was space for an app that served narcissists who want matches as close to themselves as possible. And also people who have trouble remembering names/birthdays/blooddtypes! You Do You gives them one less thing to have to remember.

### Build status

Minimum viable product is complete. Several stretch goals lay ahead.

### Screenshots
Include logo/demo screenshot etc.

### Tech/framework used

Built with
- React
- CSS
- Rails API

### Features

You Do You will match exact first names (Alex matches Alex, but does not match Alexander nor Alexa), bloodtypes, and exact birthdays (January 3, 2000, matches only January 3, 2000).

### Installation

To run You Do You locally, run the backend firstby typing the following commands in the terminal:
```
rails db migrate
rails db seed
rails s
```

Then run the front end:
```
npm install
bundle install
npm start
```

### Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/dybushnell/inflation_db. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

### Acknowledgments

I greatly appreciate the assistance of Flatiron School's Steven Balasta, Tashawn Williams, Brianna Dixon, and Jeffrey Hwang in the creation of this project. Overall this project would not have been possible without Liana Rosabal-Bushnell, whose 2014 OKCupid profile was the last I would ever have to read.

### License

The app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

### Code of Conduct

Everyone interacting in the InflationDb project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/dybushnell/inflation_db/blob/master/CODE_OF_CONDUCT.md).

MIT © [dybushnell]()
