import cron from 'node-cron';
import { exec } from 'child_process';
import path from 'path'; 

const MONGODUMP_PATH = "C:\\Program Files\\MongoDB\\Server\\8.0\\bin\\mongodump.exe";
const DB_NAME = 'revisaoP3';
const BASE_BACKUP_DIR = 'C:\\Estudos\\banco-dados-nao-relacional\\revisaoP3';

/* cron.schedule('0 1 0 * * *', () => {
    runBackupNow();
}); */

runBackupNow();

function runBackupNow() {
    console.log('Executando backup imediato do MongoDB...');    

    const dateString = new Date().toISOString().slice(0, 10);
    const backupDir = path.join(BASE_BACKUP_DIR, `bkp_${dateString}`);

    const command = `"${MONGODUMP_PATH}" --db ${DB_NAME} --out "${backupDir}"`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro no backup: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Erro no mongodump (stderr): ${stderr}`);
            return;
        }
        console.log(`Backup concluído com sucesso em: ${backupDir}`);
    });
}
