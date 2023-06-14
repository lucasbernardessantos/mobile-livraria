"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeitorService = void 0;
const leitorRepository_1 = require("../../repository/leitorRepository");
class LeitorService {
    constructor() {
        this.repositoryLeitor = new leitorRepository_1.LeitorRepository();
    }
    gravar(dto) {
    }
}
exports.LeitorService = LeitorService;
