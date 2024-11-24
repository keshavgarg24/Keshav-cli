#!/usr/bin/env node
import boxen from 'boxen';
import { createSpinner } from 'nanospinner';
import chalk from 'chalk';
import gradient from 'gradient-string';
import figlet from 'figlet';
import chalkAnimation from 'chalk-animation';
import terminalImage from 'terminal-image';
import link from 'terminal-link';

const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

// Matrix-inspired theme
const theme = {
  primary: '#00FF00',    // Matrix Green
  secondary: '#32CD32',  // Lime Green
  accent: '#98FB98',     // Pale Green
  warning: '#FFFFFF',    // White
  dark: '#000000',       // Black Background
  light: '#FFFFFF'       // White Text
};

const gradients = {
  matrix: gradient(['#000000', '#00FF00']),
  subtle: gradient(['#32CD32', '#98FB98']),
  bright: gradient(['#00FF00', '#FFFFFF'])
};

async function displayBanner() {
  console.clear();
  
  // Matrix-style loading animation
  const matrix = ['⠋', '⠙', '⠚', '⠞', '⠖', '⠦', '⠴', '⠲', '⠳', '⠓'];
  const matrixText = "ENTERING THE VOID";
  
  for (const char of matrix) {
    process.stdout.write(
      `\r${chalk.hex(theme.primary)(char)} ${chalk.hex(theme.light)(matrixText)} ${
        chalk.hex(theme.primary)(char)
      }`
    );
    await sleep(100);
  }
  
  console.clear();
  
  // New unique anime-inspired banner
  const bannerText = `
╔══════════════════════════════════════════════════════════════╗
║           ${chalk.hex(theme.warning)('⚡')} V O I D K E E P E R ${chalk.hex(theme.warning)('⚡')}                    ║
║                         ◢▆▅▄▃━━━━━━━━━━━━                   ║
║                                                              ║
║    ██╗   ██╗ ██████╗ ██╗██████╗     ▼▼▼                    ║
║    ██║   ██║██╔═══██╗██║██╔══██╗   ◢█████◣                 ║
║    ██║   ██║██║   ██║██║██║  ██║  ◢███████◣                ║
║    ╚██╗ ██╔╝██║   ██║██║██║  ██║ ◢█████████◣               ║
║     ╚████╔╝ ╚██████╔╝██║██████╔╝ ▼▼▼▼▼▼▼▼▼▼▼               ║
║      ╚═══╝   ╚═════╝ ╚═╝╚═════╝                            ║
║                                                              ║
║        虚空の番人 - Guardian of the Digital Void            ║
║     [ WHERE CODE FLOWS LIKE DIGITAL RAIN ]                  ║
╚══════════════════════════════════════════════════════════════╝`;

  console.log(gradients.matrix(bannerText));
  
  // Animated tagline
  const tagline = chalkAnimation.pulse(
    '\n > 過去、現在、未来のコードを守る - Guarding Code: Past, Present, Future < \n'
  );
  
  await sleep(2000);
  tagline.stop();

  // Loading sequence with mystical theme
  const spinner = createSpinner(chalk.hex(theme.primary)('Materializing from the void')).start();
  await sleep(1000);
  spinner.update({ text: chalk.hex(theme.primary)('Synchronizing timelines') });
  await sleep(800);
  spinner.update({ text: chalk.hex(theme.primary)('Establishing quantum link') });
  await sleep(800);
  spinner.success({ text: chalk.hex(theme.warning)('Digital realm accessed!') });

  // Info box with mystical theme
  console.log(boxen(
    `${chalk.hex(theme.primary)('VOID STATUS')} ${chalk.hex(theme.light)('••')} ${chalk.hex(theme.warning)('STABILIZED')}\n\n` +
    `${chalk.hex(theme.light)('Sentinel')}      ${chalk.hex(theme.primary)('Keshav Garg')}\n` +
    `${chalk.hex(theme.light)('Class')}         ${chalk.hex(theme.primary)('Code Architect')}\n` +
    `${chalk.hex(theme.light)('Dimension')}     ${chalk.hex(theme.primary)('量子の谷 // Quantum Valley')}`,
    {
      padding: 1,
      margin: { top: 1, bottom: 1 },
      borderStyle: 'double',
      borderColor: theme.primary,
      float: 'center',
      backgroundColor: theme.dark
    }
  ));
}

async function displaySkills(skills, category) {
  const boxOptions = {
    padding: 1,
    margin: 0,
    borderStyle: 'round',
    borderColor: theme.primary,
    backgroundColor: theme.dark
  };

  const skillText = skills.map(skill => 
    chalk.hex(theme.light)(skill)
  ).join(chalk.hex(theme.primary)(' • '));

  console.log(boxen(
    `${chalk.hex(theme.primary)(category)}\n${skillText}`,
    boxOptions
  ));
  await sleep(300);
}

async function main() {
  await displayBanner();
  
  console.log(gradients.matrix('\n< VOID ARSENAL >\n'));

  const skills = {
    'LANGUAGES': ['JavaScript', 'TypeScript', 'CPP', 'Python', 'Solidity'],
    'FRONTEND': ['React', 'Next.js', 'TailwindCSS'],
    'BACKEND': ['Node.js', 'Express'],
    'DATABASES': ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    'DEVOPS': ['Git', 'Vercel', 'Kafka']
  };

  for (const [category, categorySkills] of Object.entries(skills)) {
    await displaySkills(categorySkills, category);
  }

  // Footer with void theme
  console.log(boxen(
    chalk.hex(theme.primary)('[ VOID GATEWAY ACTIVE ]\n\n') +
    chalk.hex(theme.light)('Access the void through:') + '\n' +
    link(chalk.hex(theme.primary)('keshavgarg24'), 'https://github.com/keshavgarg24') + '\n' +
    link(chalk.hex(theme.accent)('keshavgarg24.me'), 'https://www.keshavgarg24.me'),
    {
      padding: 1,
      margin: 1,
      borderStyle: 'double',
      borderColor: theme.warning,
      backgroundColor: theme.dark,
      textAlignment: 'center'
    }
  ));
}

main().catch(console.error);