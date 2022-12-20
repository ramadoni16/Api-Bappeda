const mongoose = require("mongoose");
const collectionName = "bappeda";

const bappedaSchema = new mongoose.Schema(
  {
    GUID: {
      type: String
    },
    kecamatan: {
      type: String
    },
    desa: {
      type: String
    },
    rw: {
      type: String
    },
    rt: {
      type: String
    },
    namaAnggotaKeluarga: {
      type: String
    },
    noKK: {
      type: String
    },
    nik: {
      type: String
    },
    eKtp: {
      type: String
    },
    akteKelahiran: {
      type: String
    },
    jenisKelamin: {
      type: String
    },
    tglLahir: {
      type: String
    },
    statusPerkawinan: {
      type: String
    },
    statusHubunganDenganKepalaKeluarga: {
      type: String
    },
    penghasilanPerbulan: {
      type: String
    },
    penggunaanHPDalamRumahTangga: {
      type: String
    },
    penyakitYangPernahDiderita: {
      type: String
    },
    keluargaMenerimaBantuan: {
      type: String
    },
    sumberAirMinumUtama: {
      type: String
    },
    sumberPeneranganUtama: {
      type: String
    },
    bahanBakarAtauEnergiUtamaUntukMemasak: {
      type: String
    },
    penggunaanFasilitasTempatBuangAirBesar: {
      type: String
    },

    CREATED_AT: {
      type: Date,
      default: new Date()
    },
    UPDATED_AT: {
      type: Date,
      default: new Date()
    },
    ROLE: {
      type: String
    }
  },
  {
    versionKey: false,
    collection: collectionName
  }
);

module.exports = mongoose.model(collectionName, bappedaSchema);
