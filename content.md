cntr + B : use for the show files.
cntr + ~ : use for the open and closed terminal.
cntr + P : use for the quick open menu.
cntr + \ : use for split editor window.
cntr + W : use for the closed file.
cntr + shift + l : use select all matches and then edit or del.
cntr + D : use for add selection to matches.
shift + alt + down : use for the duplicates lines and paste it there down.

## twitter link guide

https://core.telegram.org/bots/webapps#designing-mini-apps

Direct Link Mini Apps

on en peu pas créer de lien tant que il n'y pas d'enregistrement

micropodcast DB data
podcast
{
id:"",
Title:"",
record:{audio:"",time:""},
note:{
text:"",
image:"",
file:""
}
}

## format

9:16
16:9

## bot API

{
"menu_button": {
"type": "web_app",
"text": "create a micropodcast",
"web_app": {
"url": "https://example.com/micropodcast"
}
}
}

## telegram structure

BASE_URL = `https://api.telegram.org/bot${TOKEN_BOT}/`;

## CREATE LINK OF OUR WEBAPP PODCAST

## editMessageMedia Method

{BASE_URL}editMessageMedia

## InputMedia

InputMedia:{
InputMediaAudio:{type:audio,media: }
}

"#27A7E7"
