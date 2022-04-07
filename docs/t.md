---
id: aTicketSytem
title: TicketSytem
description: Hier wird das TicketSytem erklärt.
slug: /ticketsytem
---


<h5> Die Beispiele werden in [] geschrieben.</h5>

### /t add

```
/t add kategorie: [Support] chat: [Ticketsystem] log: [ticketlog]
```

Die Kategorie ist das wo die Tickets chats erstellt werden sollen.

Das Panel wird immer im *Chat* rein gesendet.

Das Log logt wer das Ticket schließt oder speichern tut.

![LogTicket](../static/img/Ticketslog.jpg)
________________________

### /t ticket

```
/t ticket name: [Support] description: [Das ist das normale Support Ticket] emoji: [📃] text: [Hallo, schreibe dein Anliegen in den Chat.] role1: [@Supporter] role2: [@Supporter] role3: [@Supporter]
```

Der Name ist das Ticketname gemeint.

Die Discription ist die die man im Dropdown Menü, so wie das Emoji. 

Der Text ist die Nachricht, die im erstellten Ticket rein gesendet wird.

![Text](../static/img/Tickets.jpg)

Die Rollen können das Ticket sehen, bearbeiten, schließen und speichern. 
(PS. Wenn man die Rollen nicht hat kann man auch nicht das Ticket schließen und speichern, außer man hat eine bestimmte Berechtigung Server verwaltung.) 


________________________

### /t embed

```
/t embed titel: [Ticket Übersicht] description: [Wenn du Hilfe brauchst suche dir ein Ticket aus.>>Wenn es ausgenutzt wird, wird der User aus den Support System entfernt.]
```

Die > ist da um eine Zeile runter zu gehen. 

![Ticket Übersicht](../static/img/ticket_übersicht.png) 

________________________

```
/t panel
```

Ist da um das panel in den Chat rein zu schicken.
Der chat wird mit /add definiert.

________________________
```
/t delete [Ticket name]
```

Dieser Befehl ist noch in Arbeit. 
