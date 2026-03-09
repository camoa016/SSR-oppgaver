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
   docker run --rm --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword postgres
   ```
   Åpne en ny terminal for neste steg.

4. **Start PostGREST (optional) - i ny terminal**
   ```bash
   docker run --rm --name postgrest -p 3002:3000 -e PGRST_DB_URI=postgres://postgres:mysecretpassword@host.docker.internal:5432/postgres -e PGRST_DB_ANON_ROLE=postgres postgrest/postgrest
   ```
   PostGREST vil være tilgjengelig på `http://localhost:3002`

5. **Start applikasjonen**
   
   **Produksjon:**
   ```bash
   npm run serve
   ```
   
   **Utvikling (med auto-restart):**
   ```bash
   npm run dev
   ```

6. **Åpne i nettleseren**
   - Express-server: `http://localhost:3000`
   - PostGREST REST API (hvis brukt): `http://localhost:3002`

## Teknologier

- **Express.js** - Web-framework for Node.js
- **Node.js** - JavaScript runtime
- **PostgreSQL** - Relasjonsdatabase
- **pg** - PostgreSQL-driver for Node.js
- **nodemon** - Auto-reload under utvikling
- **PostGREST** - Automatisk REST API fra PostgreSQL
- **Docker** - Containerisering av database og PostGREST

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
    Automatisk CRUD-API vha PostGREST

funnet på https://tangen-2it-utvikling.netlify.app/