# SSR-oppgaver

En Express.js-basert server-side rendering (SSR) applikasjon med PostgreSQL database.

## Kom i gang

### Forutsetninger

- Node.js (v14 eller nyere)
- Docker (for PostgreSQL-databasen)
- npm eller yarn

### Installasjon

1. **Klon eller last ned prosjektet**
   ```bash
   git clone https://github.com/camoa016/SSR-oppgaver.git
   cd SSR-oppgaver
   ```

2. **Installer avhengigheter**
   ```bash
   npm install
   ```

3. **Start PostgreSQL med Docker**
   ```bash
   docker run --rm --name my-postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword postgres
   ```
   Åpne en ny terminal for neste steg.

4. **Start applikasjonen**
   
   **Produksjon:**
   ```bash
   npm run serve
   ```
   
   **Utvikling (med auto-restart):**
   ```bash
   npm run dev
   ```

5. **Åpne i nettleseren**
   ```
   http://localhost:3000
   ```

## Teknologier

- **Express.js** - Web-framework for Node.js
- **Node.js** - JavaScript runtime
- **PostgreSQL** - Relasjonsdatabase
- **pg** - PostgreSQL-driver for Node.js
- **nodemon** - Auto-reload under utvikling
- **Docker** - Containerisering av database

## API-endepunkter

| Metode | Endepunkt | Beskrivelse |
|--------|-----------|-------------|
| GET | `/` | Returnerer hilsen med klokkeslett |
| GET | `/her` | Returnerer HTML med overskrift og paragraf |
| GET | `/deltagere-1` | Returnerer liste over deltakere (hardkodet) |
| POST | `/deltagere` | Lagrer ny deltaker i databasen |

## Prosjektstruktur

```
SSR-oppgaver/
├── index.js              # Hovedapplikasjonsfil (Express-server)
├── package.json          # Prosjektkonfigur og avhengigheter
├── README.md             # Denne filen
├── spørringer.SQL        # SQL-spørringer
└── public/               # Statiske HTML-filer
    ├── deltagere.html
    ├── hei.html
    └── skuespillere-og-filmer.html
```

## Miljøvariabler

For tiden er database-innstillingene hardkodet i `index.js`. Hvis du vil gjøre endringer, rediger:
- `user`: 'postgres'
- `password`: 'mysecretpassword'
- `host`: 'localhost'
- `port`: 5432

## Lisens

ISC

## Oppgaver utført

    Server side rendering med node.js og express
    Mer om Express og JSON API'er
    Ta i mot og lagre data i Express

funnet på https://tangen-2it-utvikling.netlify.app/