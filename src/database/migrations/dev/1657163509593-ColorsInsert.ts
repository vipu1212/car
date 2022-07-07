import {MigrationInterface, QueryRunner} from 'typeorm';

export class ColorsInsert1657163509593 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('INSERT INTO Color (name,imageUrl) VALUES ("Red", "https://img.com/red")');
    await queryRunner.query('INSERT INTO Color (name,imageUrl) VALUES ("Yellow", "https://img.com/ryellowed")');
    await queryRunner.query('INSERT INTO Color (name,imageUrl) VALUES ("Green", "https://img.com/green")');
    await queryRunner.query('INSERT INTO Color (name,imageUrl) VALUES ("Blue", "https://img.com/blue")');
    await queryRunner.query('INSERT INTO Color (name,imageUrl) VALUES ("Orange", "https://img.com/orange")');
    await queryRunner.query('INSERT INTO Color (name,imageUrl) VALUES ("White", "https://img.com/white")');
    await queryRunner.query('INSERT INTO Color (name,imageUrl) VALUES ("Black", "https://img.com/black")');
    await queryRunner.query('INSERT INTO Color (name,imageUrl) VALUES ("Grey", "https://img.com/grey")');
    await queryRunner.query('INSERT INTO Color (name,imageUrl) VALUES ("Silver", "https://img.com/silver")');
    await queryRunner.query('INSERT INTO Color (name,imageUrl) VALUES ("Other", "https://img.com/other")');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async down(queryRunner: QueryRunner): Promise<void> {
    return;
  }

}
