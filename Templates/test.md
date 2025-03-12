```button
name New Note
type note(<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") + ' - ' + '\<\% tp.date.now("X") \%\>' %>, split) template
action Note
templater true
```