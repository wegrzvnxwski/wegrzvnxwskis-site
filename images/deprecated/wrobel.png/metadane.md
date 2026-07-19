---
layout: default
title: metadane
---

*wiedza własna.*

Forensic twierdzi, że dnia X miesiąca Y roku Z o godzinie takiej i takiej słuchałeś Angel od Massive Attack na Spotify. W międzyczasie robiłeś trasę w ETS2 na komputerze z systemem Windows 11 Pro, a słuchawkami były Krzaktech Napyerdalache. Fajna magia, cnie?

Nie. To nie magia. To magia metadanych, logów i innych cudów, z których forensicowcy wyciągną to, o czym sam nie wiedziałeś że w ogóle istnieje.

# EXIF

Nie wmówisz mi, że nie wiesz co to. No ale dobra...

EXIF to metadane zdjęć. Gdzie, kiedy, czym, jakie parametry. Ty robisz zdjęcie ładnego zachodu słońca, CBZC ma Twoje dokładne koordy. (o ile Twój sprzęt zapisał te koordy w EXIFach, telefony domyślnie to robią)

Większość portali społecznościowych (Meta, Discord, you name it) czyści EXIFy ze względów bezpieczeństwa. Większość nie oznacza, że każdy. Nie masz pewności? Kasuj EXIFy ręcznie, a jeśli nie zależy Ci aż tak na jakości, to rób screenshoty zdjęć i wysyłaj screenshoty. Można? Można. Fakt, taki screenshot będzie miał swoje własne metadane, ale tam już kwiatki takie jak lokalizacja nie wyjdą (chyba że zaliczysz wtopę i pokażesz ją na samym screenie).

# WINDOWS CIĘ ZDRADZI (powód 1312 dlaczego korzystam z Linuksa)

* Dziennik zdarzeń (po informatycznemu: `eventvwr.msc`). Tam jest wszystko, od momentów tuż przed BSoDami do uruchomienia systemu. Od samego początku.

* Prefetch (`C:\Windows\Prefetch`). Uruchamiane programy, częstotliwość użycia, ich nazwy, czas uruchomienia.

* Jump Lists (`%appdata%\Microsoft\Windows\Recent\AutomaticDestinations`, `%appdata%\Microsoft\Windows\Recent\CustomDestinations`), czyli to dziadostwo, które na prawokliku na przeglądarce na przykład wyświetla ostatnio odwiedzone strony. Pliki z tych katalogów potrafią powiedzieć co było czym otwierane.

* .lnk, czyli nawet i skróty (`%appdata%\Microsoft\Windows\Recent`). Ścieżka do pliku, czas dostępu, informacje o dysku.

* Amcache (`C:\Windows\AppCompat\Programs\Amcache.hve`), czyli żyła złota dla forensicu. Wykryte pliki wykonywalne (aka `.exe`ki, `.bat`y i inne rozszerzenia o których świat zapomniał), programy, ścieżki...

* BAM (Background Activity Monitor), czyli dosłownie BAM o glebę. Siedzi w rejestrze i trzyma tam dokładne czasy uruchomienia i ścieżki exeków.

* SRUM (System Resource Usage Monitor, `C:\Windows\System32\sru\SRUDB.dat`), tak, w ścieżce serio jest "sru". Baza SQLite, w której masz dokładne logi tego, ile przepchnął konkretny exek (upload/download) i przez jaką sieć WiFi. Trochę useless na PCtach przy zwykłym Ethernecie, ale na laptopach bądź komputerach z kartą bezprzewodową, można sporo wydobyć. Widać na przykład co, kiedy i przez jaką sieć zostało pobrane.

* UserAssist (rejestr: `NTUSER.DAT`), czyli mem forensica. Przechowuje najczęściej używane w GUI (środowisku graficznym) programy, żeby je potem podsuwać w Menu Start. Wpycha w rejestr ścieżkę do programów, liczbę uruchomień i datę. A czemu jest to mem forensica? Bo jest to szyfrowane przy pomocy ROT13, czyli... szyfru Cezara z przesunięciem o 13 liter alfabetu. Bez komentarza.

* Thumbcache (`%localappdata%\Microsoft\Windows\Explorer`), czyli miniaturki. Plik mogłeś usunąć, nawet i nadpisując jego miejsce na dysku na dokładkę, ale pozostał po nim taki drobny ślad. Jak miło.


# LINUX TEŻ JEST JAK TA JEDNA BYŁA (też Cię zdradzi, ale boleśniej dla śledczego)

Linux ma to do siebie, że jak go ładnie poprosisz, to otwiera się jak książka albo... dobra, nie ma albo. Słowa klucz: *ładnie poprosisz*.

## /var/log – święty katalog

No, jak sama nazwa mówi, tutaj znajdziemy większość logów. Ważniejszymi plikami są:

* `/var/log/messages` lub `/var/log/syslog` – podstawa podstaw, podobne do Dziennika zdarzeń z Windowsa
* `/var/log/auth.log` – autentyfikacja
* `/var/log/kern.log` – logi kernela
* `/var/log/cron.log` – logi crona
* `/var/log/apt/` – historia komend i logi apt/apt-get
* `/var/log/boot.log` – logi z bootowania

## komendy

Nie ma tutaj o czym rozprawiać, więc po prostu wypiszę dwie święte komendy: `dmesg` i `journalctl`.

## .bash_history (lub .zsh_history, w zależności od powłoki)

Usunąłeś te zdjęcia stópek? Spokojnie, w tych plikach będzie to widać. O ile nie wyczyściłeś historii.

## A dlaczego śledczego będzie to bolało?

Bo w przeciwieństwie do Windowsa, który trzyma usunięte pliki za rączkę i ładnie podaje je forensicowi na tacy, Linux niszczy. 
Jeśli używasz domyślnego systemu plików `ext4` i usuniesz plik, system od razu zeruje jego wskaźniki (inodes). Dla śledczego to już nie jest kliknięcie "Przywróć". To jest nurkowanie w cyfrowym szambie z pęsetą (tzw. file carving) i modlenie się, żeby poskładać te bity do kupy. 
Dodaj do tego domyślne, łatwe do wyklikania przy instalacji szyfrowanie dysku (LUKS), i jeśli nie podasz im hasła... to Twój Linux pozostanie dla nich tylko droższym przyciskiem do papieru.

# NAWET ROUTEROWI NIE MOŻESZ UFAĆ

Router to konfident. A to wszystko za sprawą serwera nazw domenowych.

## co to DNS?

DNS (Domain Name System) to takie dziadostwo, które adresy IP (np. `8.8.8.8`) zamienia na dobrze znane nam adresy WWW (np. `google.com`), i na odwrót. Tym sposobem my nie musimy zapamiętać cyferek (czy cyferek i literek w przypadku IPv6), a komputery nie muszą się uczyć gadać po ludzku.

## czemu DNS to przekleństwo?

Najczęściej nikt nie przykłada wagi do tego, na jakim DNSie lecimy. Najczęściej jest to jednak DNS naszego dostawcy internetu (ISP). Co oznacza, że tak, nasz dostawca ma wgląd do odwiedzanych przez nas stron. Chyba, że zmienimy DNS na inny.

## ale nawet zmiana nie pomoże

Jeśli przeskoczymy z DNSa od ISP, a przejdziemy do Googla, to wtedy Gugiel będzie wiedział co odwiedzamy. Co wtedy?

## DNSSec

DNSSec jest zestawem protokołów, które mają na celu zapewnienie bezpieczeństwa DNSowi. DoH (DNS over HTTPS), DoT (DNS over TLS), you name it.

## ale czemu to jest takie groźne

Router w domu często dostaje zapytania DNS od wszystkich urządzeń. Telefon, laptop, telewizor, lodówka z WiFi (tak, serio), wszystko może zostawić ślad. Router nie musi nawet wiedzieć co robisz. Wystarczy, że wie, że "ten komputer o 23:17 pytał o stronę X". I już.

# TAK, VPN, TOR I OPSEC CI NIE POMOGĄ

I tutaj dochodzimy do słynnego zdania: "OPSEC nie istnieje", które kiedyś usłyszałem z ust "profesjonalisty" (ała). I... jest w tym trochę prawdy. Nie dlatego, że VPN jest bezużyteczny. Nie dlatego, że Tor to magia dla naiwnych. Nie dlatego, że każdy siedzi z lupą i analizuje każdy Twój pakiet.

Po prostu człowiek jest największym źródłem wycieków.

Możesz mieć VPN.

Możesz mieć Tora.

Możesz mieć szyfrowany dysk, Linuksa i komputer złożony z części kupionych za gotówkę.

A potem wrzucisz zdjęcie z odbiciem w szybie, napiszesz coś charakterystycznym stylem albo zalogujesz się gdzieś tym samym kontem. I cały OPSEC idzie sobie na spacer.

OPSEC nie polega na tym, że stajesz się niewidzialny. Bardziej na tym, że zmniejszasz ilość informacji, które przypadkiem zostawiasz. 

***100% anonimowości nie istnieje. Istnieje tylko większy lub mniejszy koszt dotarcia do informacji.***

# PROGRAMY TEŻ ZDRADZĄ. (to się nazywa bycie toksycznym)

Ponieważ programy też przechowują swoją historię uruchomienia, jakich plików używały, cache i inne. Co gorsza, od tego nie da się uciec. Ale po co uciekać, skoro jesteś niewinny? No dobra, chyba że mówimy o publicznych komputerach... to zjawisko jeszcze istnieje gdzieś indziej niż w szkołach?

# TRACKERY NA STRONACH

Jak już idziemy w te tzw. delulu rejony, to zapewne wiesz, że na stronie `index.html` jest tracker. Dzięki niemu wiem na czym przeglądasz stronę (Windows/Linux/Android/iOS), jaki jest Twój adres IP (i tak jest prawdopodobnie CGNATowany tysiące razy, czyli co najwyżej zaprowadzi mnie do dostawcy VPNa lub internetu), ile masz RAMu i rdzeni/wątków. Na ogół takie typowe strony zbierają tych danych więcej, ale mi wystarczy tylko tyle żeby wiedzieć, że ktoś wszedł. Po śmiesznych parametrach mogę też ustalić czy to VMka czy sprzęt fizyczny. Wracając, wyluzuj, taki YouTube wie o Tobie więcej niż Ty sam, więc nie ma co schizować aż tak, nie ma co czyścić logów. Jedyne co to może bym uważał na te EXIFy trochę.

Co to ma wspólnego z poradami paraprawnymi? Nic. Po prostu nie odwalaj chorych akcji, albo często czyść po sobie logi, nawet tak o, chociaż to akurat brzmi podejrzanie. Kurwa, czemu ja wszystko co mówię, obudowuję w powłoczkę czegoś nielegalnego... ja wychodzę. Cześć.

## polecajka

Mezzanine od Massive Attack. Fajny album.