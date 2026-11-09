import fs from 'fs';

export default class JsonReader {

    // Purpose: Read JSON test data
    static read(filePath) {

        console.log(`[INFO] Reading test data from: ${filePath}`);

        try {

            const data = JSON.parse(
                fs.readFileSync(filePath, 'utf-8')
            );

            console.log('[PASS] Test data read successfully');

            return data;

        } catch (error) {

            console.error('[FAIL] Failed to read JSON test data');
            console.error(error);

            throw error;
        }
    }
}