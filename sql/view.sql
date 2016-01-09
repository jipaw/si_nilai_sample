CREATE
    ALGORITHM = UNDEFINED
    DEFINER = `root`@`localhost`
    SQL SECURITY DEFINER
VIEW `nilaisemester` AS
    select
        `mahasiswa`.`NPM` AS `NPM`,
        `mata_kuliah`.`idmata_kuliah` AS `idmata_kuliah`,
        `mata_kuliah`.`nama` AS `nama`,
		`mata_kuliah`.`sks` AS `sks`,
        `semester`.`idSemester` AS `idSemester`,
        `nilai`.`semester_berjalan` AS `semester_berjalan`,
        `nilai`.`uts` AS `uts`,
        `nilai`.`uas` AS `uas`,
        `nilai`.`nilai_akhir` AS `nilai_akhir`
    from
        (`semester`
        join (`mata_kuliah`
        join (`mahasiswa`
        join `nilai` ON ((`mahasiswa`.`NPM` = `nilai`.`NPM`))) ON ((`mata_kuliah`.`idmata_kuliah` = `nilai`.`idmata_kuliah`))) ON ((`semester`.`idSemester` = `nilai`.`idSemester`)))
