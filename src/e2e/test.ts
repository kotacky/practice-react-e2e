import 'testcafe';
import { Selector } from 'testcafe';

// 1. テストする画面
fixture('Getting started').page('http://devexpress.github.io/testcafe/example');

test('名前の入力確認テスト', async (t: TestController) => {
  await t
    .typeText('#developer-name', 'ほげ山ふが太郎') // 2. 名前の入力
    .takeScreenshot({
      path:'test/before.png',
      fullPage: true
    })
    .click('#submit-button') // 3. Submitボタンのクリック
    .expect(Selector('#article-header').innerText) // 4-a. 表示項目の指定
    .eql('Thank you, ほげ山ふが太郎!') // 4-b. 表示の確認
    .takeScreenshot({
      path:'test/after.png',
      fullPage: true
    });
});
