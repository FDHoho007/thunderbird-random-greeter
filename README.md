# Thunderbird Random Greeter

This thunderbird extension allows you to place '%randomgreeting%' as placeholder into your signature.
It will then be replace by a random greeting choosen from a list in the greetings/index.json.

Source for greetings/ingame.json is https://www.ingame.de/news/lustige-verabschiedungen-liste-witzig-freunde-hamburg-cringe-beste-sprueche-91991447.html.

## Known issues
* Overwriting the compose details will currently result in Thunderbird not knowing what the signature of the message is. Therefore a signature with %randomgreeting% in it will be treated as text and not removed automatically when switching identities.