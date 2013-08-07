Package.describe({
  summary: "Sentiment analyzer for Meteor"
});

Npm.depends({
    "sentiment": "0.2.1"
});

Package.on_use(function (api, where) {
  api.add_files('sentiment.js', 'server');
});
