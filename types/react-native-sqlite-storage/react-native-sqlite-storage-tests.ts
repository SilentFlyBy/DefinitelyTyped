import * as sqlite from 'react-native-sqlite-storage';

const db = sqlite.openDatabase({name: 'test.db', location: 'default'}, () => {
    db.transaction((tx) => {
        tx.executeSql('SELECT * FROM Employees a, Departments b WHERE a.department = b.department_id', [], (tx, results) => {
            // Get rows with Web SQL Database spec compliance.
            const len = results.rows.length;
            for (let i = 0; i < len; i++) {
              const row = results.rows.item(i);
              const log = `Employee name: ${row.name}, Dept Name: ${row.deptName}`;
            }
          });
      });
}, (err) => {
    // log error
});
