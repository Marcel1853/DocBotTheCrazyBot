---
id: aTicketSytem
title: TicketSytem
description: Hier wird das TicketSytem erklärt.
slug: /ticketsytem
sidebar_position: 3
---


:::danger Hinweis Speicherung von Tickets

Wenn ein Ticket gespeichert wird, erhält man normalerweise einen Link zum Dashboard. Allerdings ist es momentan aufgrund der Neugestaltung des Dashboards nicht möglich, die Tickets im Dashboard anzuzeigen.

Die Funktion zur Anzeige von gespeicherten Tickets im Dashboard ist vorübergehend deaktiviert.
:::


<h3> Die Beispiele werden in [] geschrieben.</h3>


### /settings ticketsy setting

```
/settings ticketsy setting kategorie: [Support] chat: [Ticketsystem] log: [ticketlog]
```

Die Kategorie definiert, in welchem Chat die Tickets erstellt werden sollen.

Das Panel wird immer in den Chat gesendet.

Das Log protokolliert, wer das Ticket schließt oder speichert.

![LogTicket](/img/Ticketslog.jpg)
________________________

### /settings ticketsy addticket

Emoji / role2 / role3 sind optional!

```
/settings ticketsy addticket name: [Support] description: [Das ist das normale Support Ticket] emoji: [📃] text: [Hallo, schreibe dein Anliegen in den Chat.] role1: [@Supporter] role2: [@Supporter] role3: [@Supporter]
```

Der Name bezieht sich auf den Ticketnamen.

Die Beschreibung ist diejenige, die im Dropdown-Menü erscheint, ebenso wie das Emoji.

Der Text ist die Nachricht, die im erstellten Ticket gesendet wird.

![Text](/img/Tickets.jpg)

Die Rollen können das Ticket sehen, bearbeiten, schließen und speichern.
(Hinweis: Ohne die erforderlichen Rollen kann das Ticket nicht geschlossen oder gespeichert werden, es sei denn, der Benutzer verfügt über bestimmte Serververwaltungsrechte.)


________________________

### /settings ticketsy embed

```
/settings ticketsy embed titel: [Ticket Übersicht] description: [Wenn du Hilfe brauchst suche dir ein Ticket aus.>>Wenn es ausgenutzt wird, wird der User aus den Support System entfernt.]
```

Das > dient dazu, eine Zeile nach unten zu springen.

![Ticket Übersicht](/img/ticket_übersicht.png) 

________________________

### /settings ticketsy panel

```
/settings ticketsy panel
```

Ist da um das panel in den Chat rein zu schicken.
Der chat wird mit '/settings ticketsy setting' definiert.

________________________

### /settings ticketsy delete
```
/settings ticketsy delete [Ticket name]
```

Löscht ein bestimmtes Ticket.

