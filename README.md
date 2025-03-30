![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/itzMRZ/salah-n-saum?utm_source=oss&utm_medium=github&utm_campaign=itzMRZ%2Fsalah-n-saum&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)

# Salah n Saum

A clean and simple solution to check iftar and sehri timings along with the next two upcoming salah times. This project fetches prayer time data from local JSON files and offers a customizable location selection.

## Features

- **Saum Timings:** Displays iftar and sehri timings.
- **Upcoming Salah:** Shows the next two upcoming salah times.
- **Location Support:** Customizable dropdown for various locations.
- **Clean & Simple:** Designed with clarity in mind for ease of use.

## Data Sources

- **Bangladesh Data Source:** [Islamic Foundation, Bangladesh](https://www.facebook.com/share/p/18iUrffarT/)
- **St. John's Data Source:** [msa_mun on Instagram](https://www.instagram.com/p/DGN-7QkRYHl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)
- **Klang Data Source:** See credits in the [index.html](./index.html)

## Supported Locations

- 🇧🇩 Dhaka
- 🇧🇩 Tangail
- 🇧🇩 Barisal
- 🇧🇩 Faridpur
- 🇧🇩 Bogra
- 🇧🇩 Rangpur
- 🇧🇩 Khulna
- 🇧🇩 Dinajpur
- 🇧🇩 Naogaon
- 🇧🇩 Jessore
- 🇧🇩 Rajshahi
- 🇧🇩 Panchagarh
- 🇧🇩 Chapainawabganj
- 🇧🇩 Chandpur
- 🇧🇩 Mymensingh
- 🇧🇩 Narsingdi
- 🇧🇩 Comilla
- 🇧🇩 Brahmanbaria
- 🇧🇩 Feni
- 🇧🇩 Cox's Bazar
- 🇧🇩 Chattogram
- 🇧🇩 Sunamganj
- 🇧🇩 Moulvibazar
- 🇧🇩 Sylhet
- 🇲🇾 Klang
- 🇨🇦 St. John's

## How It Works

The application loads prayer time data from JSON file `ramadan2025.json`. It then formats the timings and updates the UI accordingly, with custom logic for special locations ( 🇲🇾 Klang & 🇨🇦 St. John's) where needed.

## Setup

1. Clone the repository.
2. Open the project in Visual Studio Code.
3. Make sure the JSON data files are present in the project folder.
4. Open `index.html` in your browser to view the application.

## License

See [LICENSE](./LICENSE) for details.
