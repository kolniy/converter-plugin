// const natural = require("natural");
// const tokenizer = new natural.WordPunctTokenizer();

// console.log(tokenizer.tokenize("The quick brown fox jumps over the lazy dog"));

// console.log(
//   natural.PorterStemmer.tokenizeAndStem(
//     "I can see that we are going to be friends"
//   )
// );

// console.log(natural.HammingDistance("karolin", "kathrin", false));
// console.log(natural.HammingDistance("karolin", "kerstin", false));
// console.log(natural.HammingDistance("short string", "longer string", false));
// console.log(natural.HammingDistance("kolawole", "kolawole"));

// var classifier = new natural.BayesClassifier();
// classifier.addDocument("i am long qqqq", "buy");
// classifier.addDocument("buy the q's", "buy");
// classifier.addDocument("short gold", "sell");
// classifier.addDocument("sell gold", "sell");
// classifier.train();

// console.log(classifier.classify("i am short silver"));
// console.log(classifier.classify("i am long copper"));

// const Analyzer = natural.SentimentAnalyzer;
// const stemmer = natural.PorterStemmer;
// const analyzer = new Analyzer("English", stemmer, "afinn");

// // getSentiment expects an array of strings
// console.log(
//   analyzer.getSentiment(["I", "don't", "want", "to", "play", "with", "you"])
// );

// var metaphone = natural.Metaphone;
// var soundEx = natural.SoundEx;

// var wordA = "phonetics";
// var wordB = "fonetix";

// if (metaphone.compare(wordA, wordB)) console.log("They sound alike!");

var corpus = ["something", "soothing"];
var spellcheck = new natural.Spellcheck(corpus);

console.log(spellcheck.getCorrections("soemthing", 1));
console.log(spellcheck.getCorrections("soemthing", 2));
