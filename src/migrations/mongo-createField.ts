import { MongoDatabase, ProductModel } from "../data";

async function createdField() {
    try {

        const mongo = new MongoDatabase();
        await mongo.connect();

        const result = await ProductModel.updateMany(
            { subcategories: { $exists: false } },
            { $set: { subcategories: [] } },
        );

        console.log("Se han actualizado", result.modifiedCount, "documentos");

    }
    catch (error) {
        console.error("Error durante la migración:", error);
    }
}

createdField();
